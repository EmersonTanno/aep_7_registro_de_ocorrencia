import { IsDateString, IsString, isString } from "class-validator"

export class CreateOcorrenciaDto {
    @IsString()
    nameOccurrence: string;
  
    @IsString()
    namePerson: string;
  
    @IsString()
    descricaoOccurrence: string;
  
    @IsDateString()
    dateOccurrence: string;
  
    @IsString()
    localOccurrence: string;
}
