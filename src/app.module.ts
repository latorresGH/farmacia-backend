import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TurnosModule } from './turnos/turnos.module';
import { AuthModule } from './auth/auth.module';
import { TiposTurnoModule } from './tipos-turno/tipos-turno.module';
import { CajaModule } from './caja/caja.module';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy/jwt.strategy';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AdminModule } from './admin/admin.module';
import { AnotacionesModule } from './anotaciones/anotaciones.module';

@Module({
  imports: [TurnosModule, TiposTurnoModule, AuthModule, CajaModule, UsuariosModule, AdminModule, AnotacionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
