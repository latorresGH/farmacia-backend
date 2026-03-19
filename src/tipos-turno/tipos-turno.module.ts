import { Module } from '@nestjs/common';
import { TiposTurnoService } from './tipos-turno.service';
import { TiposTurnoController } from './tipos-turno.controller';

@Module({
  providers: [TiposTurnoService],
  controllers: [TiposTurnoController]
})
export class TiposTurnoModule {}
