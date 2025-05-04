import { Injectable } from "@nestjs/common";
import { OcorrenciaRepository } from "../ocorrencia.repository";
import { Ocorrencia } from "../entities/ocorrencia.entity";

@Injectable()
export class CreateOccurrence
{
    constructor(
        private readonly occurrenceRepository: OcorrenciaRepository,
    ) {}

    async exec(data: Ocorrencia): Promise<{ status: number; data: Ocorrencia }> {
        const ocorrencia = await this.occurrenceRepository.createOccurrence(data);
        return {
          status: 201,
          data: ocorrencia,
        };
      }
}