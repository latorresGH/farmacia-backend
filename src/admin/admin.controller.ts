import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('resumen')
  getResumen() {
    return this.adminService.getResumenGeneral();
  }

  @Get('pico-hora')
  getPicoHora(@Query('fecha') fecha?: string) {
    return this.adminService.getPicoHora(fecha);
  }

  @Get('rendimiento-empleados')
  getRendimiento(
    @Query('desde') desde?: string,
    @Query('hasta') hasta?: string,
  ) {
    return this.adminService.getRendimientoEmpleados(desde, hasta);
  }

  @Get('cancelaciones')
  getCancelaciones(
    @Query('desde') desde?: string,
    @Query('hasta') hasta?: string,
  ) {
    return this.adminService.getCancelaciones(desde, hasta);
  }

  @Get('comparativa-semanal')
  getComparativa() {
    return this.adminService.getComparativaSemanal();
  }

  @Get('tiempo-espera-por-tipo')
getTiempoEsperaPorTipo(
  @Query('desde') desde?: string,
  @Query('hasta') hasta?: string,
) {
  return this.adminService.getTiempoEsperaPorTipo(desde, hasta);
}

@Get('evolucion-diaria')
getEvolucionDiaria(
  @Query('desde') desde?: string,
  @Query('hasta') hasta?: string,
) {
  return this.adminService.getEvolucionDiaria(desde, hasta);
}
}