import {
  Controller,
  Get,
  Patch,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
  Query,
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

  @Roles('ADMIN')
  @Get()
  listarEmpleados() {
    return this.usuariosService.listarEmpleados();
  }

  @Roles('ADMIN')
  @Get('turnos/hoy')
turnosHoy(@Query('fecha') fecha?: string) {
  return this.usuariosService.turnosHoyPorEmpleado(
    fecha ? new Date(fecha) : undefined
  );
}

  @Roles('ADMIN')
  @Get('turnos/semana')
turnosSemana(@Query('fecha') fecha?: string) {
  return this.usuariosService.turnosSemanaPorEmpleado(
    fecha ? new Date(fecha) : undefined
  );
}

  @Roles('ADMIN')
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
}
