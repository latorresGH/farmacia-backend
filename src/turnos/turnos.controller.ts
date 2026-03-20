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
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import type { Request } from 'express';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('turnos')
export class TurnosController {
  constructor(private readonly turnosService: TurnosService) {}

  // ✅ Crear turno
  @Post()
  async crearTurno(
    @Req() req: Request,
    @Body() dto: CrearTurnoDto,
    @Headers('idempotency-key') idempotencyKey: string,
  ) {
    if (!idempotencyKey) {
      throw new BadRequestException('Idempotency-Key header is required');
    }

    const farmaciaId = (req as any).user.farmaciaId;

    return this.turnosService.crearTurno(
      farmaciaId,
      dto.tipoTurnoId,
      idempotencyKey,
    );
  }

  // ✅ Listar turnos de hoy
  @Get('hoy')
  async listarHoy(@Req() req: Request) {
    const farmaciaId = (req as any).user.farmaciaId;

    return this.turnosService.listarTurnosHoy(farmaciaId);
  }

  // ✅ Obtener todos
  @Get()
  async obtenerTodos(
    @Req() req: Request,
    @Query('estado') estado?: EstadoTurno,
  ) {
    const farmaciaId = (req as any).user.farmaciaId;

    return this.turnosService.obtenerTurnos(farmaciaId, estado);
  }

  // ✅ Llamar turno
  @Roles('EMPLEADO', 'ADMIN')
  @Patch(':id/llamar')
  async llamarTurno(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const farmaciaId = (req as any).user.farmaciaId;

    return this.turnosService.llamarTurno(id, farmaciaId);
  }

  // ✅ Finalizar turno
  @Roles('EMPLEADO', 'ADMIN')
  @Patch(':id/finalizar')
  async finalizarTurno(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number) {
    const farmaciaId = (req as any).user.farmaciaId;

    return this.turnosService.finalizarTurno(id, farmaciaId);
  }

  // ✅ Cancelar turno
  @Roles('ADMIN')
  @Patch(':id/cancelar')
  async cancelarTurno(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number) {
    const farmaciaId = (req as any).user.farmaciaId;

    return this.turnosService.cancelarTurno(id, farmaciaId);
  }

  // ✅ Turno actual
  @Get('actual')
  async turnoActual(@Req() req: Request) {
    const farmaciaId = (req as any).user.farmaciaId;

    return this.turnosService.turnoActual(farmaciaId);
  }

  // ✅ Llamar siguiente
  @Roles('EMPLEADO', 'ADMIN')
  @Post('siguiente')
  async llamarSiguiente(@Req() req: Request, @Body() dto: LlamarSiguienteDto) {
    const farmaciaId = (req as any).user.farmaciaId;

    return this.turnosService.llamarSiguiente(farmaciaId, dto.tipoTurnoId);
  }
}
