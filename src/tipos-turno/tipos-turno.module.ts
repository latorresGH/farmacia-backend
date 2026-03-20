import { Module } from '@nestjs/common';
import { TiposTurnoService } from './tipos-turno.service';
import { TiposTurnoController } from './tipos-turno.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TiposTurnoService],
  controllers: [TiposTurnoController]
})
export class TiposTurnoModule {}
