import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  ParseIntPipe,
  Query,
  Headers,
  BadRequestException,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TurnosService } from './turnos.service';
import { EstadoTurno } from '@prisma/client';
import { CrearTurnoDto } from './dtos/CrearTurnoDto';
import { LlamarSiguienteDto } from './dtos/LlamarSiguienteDto';
import { DerivarTurnoDto } from './dtos/DerivarTurnoDto';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { PrismaService } from '../prisma/prisma.service';
import type { Request } from 'express';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('turnos')
export class TurnosController {
  constructor(
    private readonly turnosService: TurnosService,
    private readonly prisma: PrismaService,
  ) {}

  @Post()
  async crearTurno(
    @Req() req: Request,
    @Body() dto: CrearTurnoDto,
    @Headers('idempotency-key') idempotencyKey: string,
  ) {
    if (!idempotencyKey) {
      throw new BadRequestException('Idempotency-Key header is required');
    }

    return this.turnosService.crearTurno(dto.tipoTurnoId, idempotencyKey);
  }

  @Get('hoy')
  async listarHoy() {
    return this.turnosService.listarTurnosHoy();
  }

  @Get()
  async obtenerTodos(
    @Query('estado') estado?: EstadoTurno,
    @Query('tipoTurnoId') tipoTurnoId?: string,
  ) {
    const tipoId = tipoTurnoId ? Number(tipoTurnoId) : undefined;
    return this.turnosService.obtenerTurnos(estado, tipoId);
  }

  @Roles('EMPLEADO', 'ADMIN')
  @Patch(':id/llamar')
  async llamarTurno(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const user = (req as any).user;
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: user.userId },
      select: { cajaId: true },
    });
    return this.turnosService.llamarTurno(
      id,
      user?.userId,
      usuario?.cajaId ?? undefined,
    );
  }

  @Roles('EMPLEADO', 'ADMIN')
  @Patch(':id/derivar')
  async derivarTurno(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: DerivarTurnoDto,
  ) {
    return this.turnosService.derivarTurno(id, dto.empleadoId);
  }

  @Roles('EMPLEADO', 'ADMIN')
  @Patch(':id/iniciar')
  async iniciarAtencion(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const user = (req as any).user;
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: user.userId },
      select: { cajaId: true },
    });
    return this.turnosService.iniciarAtencion(
      id,
      user?.userId,
      usuario?.cajaId ?? undefined,
    );
  }

@Roles('EMPLEADO', 'ADMIN')
@Patch(':id/notas')
async actualizarNotas(
  @Param('id', ParseIntPipe) id: number,
  @Body() body: { notas: string },
) {
  return this.turnosService.actualizarNotas(id, body.notas);
}

  @Roles('EMPLEADO', 'ADMIN')
  @Patch(':id/finalizar')
  async finalizarTurno(@Param('id', ParseIntPipe) id: number) {
    return this.turnosService.finalizarTurno(id);
  }

  @Roles('EMPLEADO', 'ADMIN') // cambiás de solo ADMIN a ambos
  @Patch(':id/cancelar')
  async cancelarTurno(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { motivo?: string },
  ) {
    return this.turnosService.cancelarTurno(id, body?.motivo);
  }
  @Get('actual')
  async turnoActual() {
    return this.turnosService.turnoActual();
  }

  @Roles('EMPLEADO', 'ADMIN')
  @Post('siguiente')
  async llamarSiguiente(@Req() req: Request, @Body() dto: LlamarSiguienteDto) {
    const user = (req as any).user;
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: user.userId },
      select: { cajaId: true },
    });
    return this.turnosService.llamarSiguiente(
      dto.tipoTurnoId,
      user?.userId,
      usuario?.cajaId ?? undefined,
    );
  }

  @Get(':id/estadisticas')
  async obtenerEstadisticas(@Param('id', ParseIntPipe) id: number) {
    return this.turnosService.obtenerEstadisticasTurno(id);
  }
}
