import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateOcorrenciaDto {
  @IsOptional()
  @IsString()
  nameOccurrence?: string;

  @IsOptional()
  @IsString()
  namePerson?: string;

  @IsOptional()
  @IsString()
  descricaoOccurrence?: string;

  @IsOptional()
  @IsDateString()
  dateOccurrence?: string;

  @IsOptional()
  @IsString()
  localOccurrence?: string;
}
