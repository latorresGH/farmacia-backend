import { IsInt } from 'class-validator';

export class CrearTurnoDto {
  @IsInt()
  tipoTurnoId: number;
}
