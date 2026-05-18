import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AnotacionesService } from './anotaciones.service';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { PrismaService } from '../prisma/prisma.service';

@UseGuards(JwtAuthGuard)
@Controller('turnos/:turnoId/anotaciones')
export class AnotacionesController {
  constructor(
    private readonly anotacionesService: AnotacionesService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  async listar(@Param('turnoId', ParseIntPipe) turnoId: number) {
    return this.anotacionesService.obtenerAnotaciones(turnoId);
  }

  @Post()
  async crear(
    @Param('turnoId', ParseIntPipe) turnoId: number,
    @Body('contenido') contenido: string,
    @Request() req: any,
  ) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id: req.user.userId },
      select: { nombre: true, rol: true },
    });

    return this.anotacionesService.crearAnotacion(
      turnoId,
      contenido,
      req.user.userId,
      usuario?.nombre ?? 'Usuario',
      usuario?.rol === 'ADMIN',
    );
  }

  @Delete(':id')
  async eliminar(
    @Param('id', ParseIntPipe) id: number,
    @Request() req: any,
  ) {
    return this.anotacionesService.eliminarAnotacion(
      id,
      req.user.userId,
      req.user.rol === 'ADMIN',
    );
  }
}