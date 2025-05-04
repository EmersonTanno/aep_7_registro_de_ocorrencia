import { Injectable } from "@nestjs/common";
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
        const occurrencies = await this.occurrenciRepository.getAllOccurrencies();

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
    }
      
}