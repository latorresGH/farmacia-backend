import { IsInt } from 'class-validator';

export class DerivarTurnoDto {
  @IsInt()
  empleadoId: number;
}
