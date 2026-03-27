import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { TiposTurnoService } from './tipos-turno.service';

@Controller('tipos-turno')
export class TiposTurnoController {
  constructor(private readonly tiposService: TiposTurnoService) {}

  // ✅ Crear tipo
  @Post()
  async crearTipo(
    @Body()
    body: {
      nombre: string;
      prefijo: string;
      duracionMin?: number;
      farmaciaId: number;
    },
  ) {
    return this.tiposService.crearTipoTurno(body);
  }

  // ✅ Listar tipos por farmacia
  @Get(':farmaciaId')
  async obtenerTipos(@Param('farmaciaId', ParseIntPipe) farmaciaId: number) {
    return this.tiposService.obtenerTipos(farmaciaId);
  }

  // ✅ Obtener uno
  @Get('detalle/:id')
  async obtenerTipo(@Param('id', ParseIntPipe) id: number) {
    return this.tiposService.obtenerTipo(id);
  }
  //Listar los tipos
  @Get()
  async listarPublico() {
    const farmaciaId = 1; // 👈 hardcode por ahora

    return this.tiposService.obtenerTipos(farmaciaId);
  }

  // ✅ Actualizar
  @Patch(':id')
  async actualizarTipo(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: {
      nombre?: string;
      prefijo?: string;
      duracionMin?: number;
    },
  ) {
    return this.tiposService.actualizarTipo(id, body);
  }

  // ✅ Eliminar
  @Delete(':id')
  async eliminarTipo(@Param('id', ParseIntPipe) id: number) {
    return this.tiposService.eliminarTipo(id);
  }
}
