import { IsInt, IsOptional } from 'class-validator'

export class LlamarSiguienteDto {

  @IsOptional()
  @IsInt()
  tipoTurnoId?: number

}