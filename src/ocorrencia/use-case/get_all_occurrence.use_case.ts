import { Injectable } from "@nestjs/common";
import { OcorrenciaRepository } from "../ocorrencia.repository";
import { Ocorrencia } from "../entities/ocorrencia.entity";

@Injectable()
export class GetAllOccurrence
{
    constructor(
        private readonly occurrenciRepository: OcorrenciaRepository,
    ) {}

    async exec(): Promise<{ status: number; data: Ocorrencia[] }> {
        const occurrencies = await this.occurrenciRepository.getAllOccurrencies();
        return {
            status: 200,
            data: occurrencies,
        };
    }
      
}