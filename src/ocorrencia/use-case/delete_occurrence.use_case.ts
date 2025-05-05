import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { OcorrenciaRepository } from "../ocorrencia.repository";

@Injectable()
export class DeleteOccurrence 
{
    constructor (private readonly occurrenceRepository: OcorrenciaRepository) {}

    async exec (id: string): Promise<{ status: number }>{
        try{
            const findedOccurrence = await this.occurrenceRepository.getOccurenceById(id);
            if(!findedOccurrence){
                throw new NotFoundException("Ocorrência não encontrada");
            }

            await this.occurrenceRepository.deleteOccurrence(id);

            return {
                status: 204
            }
            
        } catch(e){
            if(e instanceof NotFoundException){
                throw e;
            }

            throw new InternalServerErrorException('Erro ao deletar a ocorrência');
        }
    }
}