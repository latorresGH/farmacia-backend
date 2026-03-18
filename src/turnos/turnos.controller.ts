import {
    Controller,
    Get,
    Post,
    Patch,
    Param,
    Body,
    ParseIntPipe,
    Query,
    Headers
  } from '@nestjs/common'
  import { TurnosService } from './turnos.service'
  import { EstadoTurno } from '@prisma/client';
  
  @Controller('turnos')
  export class TurnosController {
  
    constructor(private readonly turnosService: TurnosService) {}
  
    // ✅ Crear turno (TABLET)
    @Post()
    async crearTurno(
      @Body() body: { farmaciaId: number; tipoTurnoId: number},
      @Headers('idempotency-key') idempotencyKey: string
    ) {
        if (!idempotencyKey) {
            throw new Error('Idempotency-Key header is required')
          }

      return this.turnosService.crearTurno(
        body.farmaciaId,
        body.tipoTurnoId,
        idempotencyKey
      )
    }
  
    // ✅ Listar turnos de hoy (PC)
    @Get('hoy/:farmaciaId')
    async listarHoy(
      @Param('farmaciaId', ParseIntPipe) farmaciaId: number
    ) {
      return this.turnosService.listarTurnosHoy(farmaciaId)
    }
  
    // ✅ Obtener todos (admin / estadísticas)
    @Get(':farmaciaId')
    async obtenerTodos(
      @Param('farmaciaId', ParseIntPipe) farmaciaId: number,
      @Query('estado') estado?: EstadoTurno
    ) {
      return this.turnosService.obtenerTurnos(farmaciaId, estado)
    }
  
    // ✅ Llamar turno (PC)
    @Patch(':id/llamar')
    async llamarTurno(
      @Param('id', ParseIntPipe) id: number
    ) {
      return this.turnosService.llamarTurno(id)
    }
  
    // ✅ Finalizar turno
    @Patch(':id/finalizar')
    async finalizarTurno(
      @Param('id', ParseIntPipe) id: number
    ) {
      return this.turnosService.finalizarTurno(id)
    }
  
    // ✅ Cancelar turno
    @Patch(':id/cancelar')
    async cancelarTurno(
      @Param('id', ParseIntPipe) id: number
    ) {
      return this.turnosService.cancelarTurno(id)
    }
  
    // ✅ Turno actual (pantalla / TV)
    @Get('actual/:farmaciaId')
    async turnoActual(
      @Param('farmaciaId', ParseIntPipe) farmaciaId: number
    ) {
      return this.turnosService.turnoActual(farmaciaId)
    }
  
  }