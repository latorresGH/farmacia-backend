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
} from '@nestjs/common';
import { TurnosService } from './turnos.service';
import { EstadoTurno } from '@prisma/client';
import { CrearTurnoDto } from './dtos/CrearTurnoDto';
import { LlamarSiguienteDto } from './dtos/LlamarSiguienteDto';
import { BadRequestException } from '@nestjs/common';

@Controller('turnos')
export class TurnosController {
  constructor(private readonly turnosService: TurnosService) {}

  // ✅ Crear turno (TABLET)
  @Post()
  async crearTurno(
    @Body() dto: CrearTurnoDto,
    @Headers('idempotency-key') idempotencyKey: string,
  ) {
    if (!idempotencyKey) {
      throw new BadRequestException('Idempotency-Key header is required');
    }

    return this.turnosService.crearTurno(
      dto.farmaciaId,
      dto.tipoTurnoId,
      idempotencyKey,
    );
  }

  // ✅ Listar turnos de hoy (PC)
  @Get('hoy/:farmaciaId')
  async listarHoy(@Param('farmaciaId', ParseIntPipe) farmaciaId: number) {
    return this.turnosService.listarTurnosHoy(farmaciaId);
  }

  // ✅ Obtener todos (admin / estadísticas)
  @Get(':farmaciaId')
  async obtenerTodos(
    @Param('farmaciaId', ParseIntPipe) farmaciaId: number,
    @Query('estado') estado?: EstadoTurno,
  ) {
    return this.turnosService.obtenerTurnos(farmaciaId, estado);
  }

  // ✅ Llamar turno (PC)
  @Patch(':id/llamar')
  async llamarTurno(@Param('id', ParseIntPipe) id: number) {
    return this.turnosService.llamarTurno(id);
  }

  // ✅ Finalizar turno
  @Patch(':id/finalizar')
  async finalizarTurno(@Param('id', ParseIntPipe) id: number) {
    return this.turnosService.finalizarTurno(id);
  }

  // ✅ Cancelar turno
  @Patch(':id/cancelar')
  async cancelarTurno(@Param('id', ParseIntPipe) id: number) {
    return this.turnosService.cancelarTurno(id);
  }

  // ✅ Turno actual (pantalla / TV)
  @Get('actual/:farmaciaId')
  async turnoActual(@Param('farmaciaId', ParseIntPipe) farmaciaId: number) {
    return this.turnosService.turnoActual(farmaciaId);
  }

  @Post(':farmaciaId/siguiente')
  async llamarSiguiente(
    @Param('farmaciaId', ParseIntPipe) farmaciaId: number,
    @Body() dto: LlamarSiguienteDto,
  ) {
    return this.turnosService.llamarSiguiente(farmaciaId, dto.tipoTurnoId);
  }
}
