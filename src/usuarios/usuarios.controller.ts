import {
  Controller,
  Get,
  Patch,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
  Query,
  Post,
  Req,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Rol } from '@prisma/client';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Roles('ADMIN', 'EMPLEADO')
  @Get()
  listarEmpleados() {
    return this.usuariosService.listarEmpleados();
  }

  @Roles('ADMIN', 'EMPLEADO')
  @Get('turnos/hoy')
  turnosHoy(@Query('fecha') fecha?: string, @Req() req?: any) {
    return this.usuariosService.turnosHoyPorEmpleado(
      fecha ? new Date(fecha) : undefined,
      req.user?.userId,
      req.user?.rol,
    );
  }

  @Roles('ADMIN', 'EMPLEADO')
  @Get('turnos/semana')
  turnosSemana(@Query('fecha') fecha?: string, @Req() req?: any) {
    return this.usuariosService.turnosSemanaPorEmpleado(
      fecha ? new Date(fecha) : undefined,
      req.user?.userId,
      req.user?.rol,
    );
  }

  @Roles('ADMIN', 'EMPLEADO')
  @Get(':id')
  obtenerEmpleado(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.obtenerEmpleado(id);
  }

  @Roles('ADMIN')
  @Patch(':id')
  actualizarEmpleado(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { nombre?: string; email?: string; rol?: Rol },
  ) {
    return this.usuariosService.actualizarEmpleado(id, body);
  }

  @Roles('ADMIN')
  @Patch(':id/caja')
  asignarCaja(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { cajaId: number | null },
  ) {
    return this.usuariosService.asignarCaja(id, body.cajaId);
  }

  @Roles('ADMIN')
  @Post()
  async crearEmpleado(
    @Body()
    body: {
      nombre: string;
      email: string;
      password: string;
      rol?: Rol;
    },
  ) {
    return this.usuariosService.crearEmpleado(body);
  }

  @Roles('ADMIN')
@Patch(':id/desactivar')
desactivarEmpleado(@Param('id', ParseIntPipe) id: number) {
  return this.usuariosService.desactivarEmpleado(id);
}

@Roles('ADMIN')
@Patch(':id/activar')
activarEmpleado(@Param('id', ParseIntPipe) id: number) {
  return this.usuariosService.activarEmpleado(id);
}

@Roles('ADMIN')
@Patch(':id/reset-password')
resetearPassword(
  @Param('id', ParseIntPipe) id: number,
  @Body() body: { password: string },
) {
  return this.usuariosService.resetearPassword(id, body.password);
}
}