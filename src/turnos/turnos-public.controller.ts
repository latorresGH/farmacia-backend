import {
  Controller,
  Post,
  Body,
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

    const farmaciaId = 1; // 👈 después lo centralizamos

    return this.turnosService.crearTurnoPublico(
      farmaciaId,
      dto.tipoTurnoId,
      idempotencyKey,
    );
  }
}