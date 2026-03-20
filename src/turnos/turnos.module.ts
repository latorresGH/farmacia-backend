import { Module } from '@nestjs/common';
import { TurnosService } from './turnos.service';
import { TurnosController } from './turnos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TurnosGateway } from './turnos.gateway';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [PrismaModule, JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  providers: [TurnosService, TurnosGateway],
  controllers: [TurnosController],
})
export class TurnosModule {}
