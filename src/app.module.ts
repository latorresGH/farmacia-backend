import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TurnosModule } from './turnos/turnos.module';
import { TiposTurnoModule } from './tipos-turno/tipos-turno.module';

@Module({
  imports: [TurnosModule, TiposTurnoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
