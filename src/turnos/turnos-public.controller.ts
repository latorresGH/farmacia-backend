import {
  Controller,
  Post,
  Body,
  Get,
  Headers,
  BadRequestException,
} from '@nestjs/common';
import { TurnosService } from './turnos.service';
import { CrearTurnoDto } from './dtos/CrearTurnoDto';

@Controller('turnos/public')
export class TurnosPublicController {
  constructor(private readonly turnosService: TurnosService) {}

  @Post()
  async crearTurnoPublico(
    @Headers('idempotency-key') idempotencyKey: string,
    @Body() dto: CrearTurnoDto,
  ) {
    if (!idempotencyKey) {
      throw new BadRequestException('Idempotency-Key requerido');
    }

    return this.turnosService.crearTurnoPublico(
      dto.tipoTurnoId,
      idempotencyKey,
    );
  }

  @Get('estado')
async estadoActual() {
  return this.turnosService.obtenerEstadoPublico();
}
}
