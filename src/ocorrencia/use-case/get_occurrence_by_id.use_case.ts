import { Injectable } from "@nestjs/common";
import { OcorrenciaRepository } from "../ocorrencia.repository";
import { OccurrenceResponseDto } from "../dto/ocorrencia_response.dto";

@Injectable()
export class GetOccurrenceById 
{
    constructor(
        private readonly occurrenciRepository: OcorrenciaRepository,
    ) {}

    async exec(id: string): Promise<{ status: number; data: OccurrenceResponseDto | null }> {
        const occurence = await this.occurrenciRepository.getOccurenceById(id);

        if(occurence)
        {
            const response: OccurrenceResponseDto = ({
                nameOccurrence: occurence.nameOccurrence,
                namePerson: occurence.namePerson,
                descricaoOccurrence: occurence.descricaoOccurrence,
                dateOccurrence: occurence.dateOccurrence.toISOString(),
                localOccurrence: occurence.localOccurrence,
            });

            return {
                status: 200,
                data: response,
            };
        }

        return {
            status: 404,
            data: null,
        };
    }
}