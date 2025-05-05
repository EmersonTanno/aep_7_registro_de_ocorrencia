import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { OcorrenciaRepository } from "../ocorrencia.repository";
import { OccurrenceResponseDto } from "../dto/ocorrencia_response.dto";

@Injectable()
export class GetOccurrenceById 
{
    constructor(
        private readonly occurrenciRepository: OcorrenciaRepository,
    ) {}

    async exec(id: string): Promise<{ status: number; data: OccurrenceResponseDto | null }> {
        try {

            const occurence = await this.occurrenciRepository.getOccurenceById(id);

            if (!occurence) {
                throw new NotFoundException('Ocorrência não encontrada');
            }

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
        } catch (e) {
            if(e instanceof NotFoundException){
                throw e;
            }

            throw new InternalServerErrorException('Erro ao buscar a ocorrência');
        }
    }
}