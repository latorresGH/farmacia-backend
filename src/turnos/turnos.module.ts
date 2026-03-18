import { Module } from '@nestjs/common';
import { TurnosService } from './turnos.service';
import { TurnosController } from './turnos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TurnosGateway } from './turnos.gateway';
@Module({
  imports: [PrismaModule],
  providers: [TurnosService, TurnosGateway],
  controllers: [TurnosController],
})
export class TurnosModule {}
