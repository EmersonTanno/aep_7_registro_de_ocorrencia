import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { OcorrenciaRepository } from "../ocorrencia.repository";
import { Ocorrencia } from "../entities/ocorrencia.entity";
import { OccurrenceResponseDto } from "../dto/ocorrencia_response.dto";

@Injectable()
export class GetAllOccurrence
{
    constructor(
        private readonly occurrenciRepository: OcorrenciaRepository,
    ) {}

    async exec(): Promise<{ status: number; data: OccurrenceResponseDto[] }> {
        try{
            const occurrencies = await this.occurrenciRepository.getAllOccurrencies();

            if(occurrencies.length == 0){
                throw new NotFoundException('Nenhuma ocorrência encontrada');
            }

            const response: OccurrenceResponseDto[] = occurrencies.map((o) => ({
                nameOccurrence: o.nameOccurrence,
                namePerson: o.namePerson,
                descricaoOccurrence: o.descricaoOccurrence,
                dateOccurrence: o.dateOccurrence.toISOString(),
                localOccurrence: o.localOccurrence,
            }));


            return {
                status: 200,
                data: response,
            };
        } catch(e){
            if (e instanceof NotFoundException) {
                throw e;
            }
        
            throw new InternalServerErrorException('Erro ao buscar ocorrências');
        }
    }
      
}