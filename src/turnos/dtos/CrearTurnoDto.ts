import { IsInt } from 'class-validator'

export class CrearTurnoDto {

  @IsInt()
  farmaciaId: number

  @IsInt()
  tipoTurnoId: number

}