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

  @Post()
  async crearTipo(
    @Body()
    body: {
      nombre: string;
      prefijo: string;
      duracionMin?: number;
    },
  ) {
    return this.tiposService.crearTipoTurno(body);
  }

  @Get()
  async listarPublico() {
    return this.tiposService.obtenerTipos();
  }

  @Get('detalle/:id')
  async obtenerTipo(@Param('id', ParseIntPipe) id: number) {
    return this.tiposService.obtenerTipo(id);
  }

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

  @Delete(':id')
  async eliminarTipo(@Param('id', ParseIntPipe) id: number) {
    return this.tiposService.eliminarTipo(id);
  }
}
