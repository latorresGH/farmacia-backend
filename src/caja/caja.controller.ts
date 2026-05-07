import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { CajaService } from './caja.service';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('cajas')
export class CajaController {
  constructor(private readonly cajaService: CajaService) {}

  @Roles('ADMIN')
  @Post()
  crearCaja(@Body() body: { nombre: string }) {
    return this.cajaService.crearCaja(body);
  }

  @Get()
  obtenerCajas() {
    return this.cajaService.obtenerCajas();
  }

  @Get(':id')
  obtenerCaja(@Param('id', ParseIntPipe) id: number) {
    return this.cajaService.obtenerCaja(id);
  }

  @Roles('ADMIN')
  @Patch(':id')
  actualizarCaja(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { nombre?: string },
  ) {
    return this.cajaService.actualizarCaja(id, body);
  }

  @Roles('ADMIN')
  @Delete(':id')
  eliminarCaja(@Param('id', ParseIntPipe) id: number) {
    return this.cajaService.eliminarCaja(id);
  }

  @Roles('ADMIN')
  @Post(':cajaId/asignar/:usuarioId')
  asignarUsuario(
    @Param('cajaId', ParseIntPipe) cajaId: number,
    @Param('usuarioId', ParseIntPipe) usuarioId: number,
  ) {
    return this.cajaService.asignarUsuario(cajaId, usuarioId);
  }

  @Roles('ADMIN')
  @Delete('desasignar/:usuarioId')
  desasignarUsuario(@Param('usuarioId', ParseIntPipe) usuarioId: number) {
    return this.cajaService.desasignarUsuario(usuarioId);
  }

  @Roles('ADMIN')
@Patch(':id/tipos-turno')
asignarTiposTurno(
  @Param('id', ParseIntPipe) id: number,
  @Body() body: { tipoTurnoIds: number[] },
) {
  return this.cajaService.asignarTiposTurno(id, body.tipoTurnoIds);
}
}
