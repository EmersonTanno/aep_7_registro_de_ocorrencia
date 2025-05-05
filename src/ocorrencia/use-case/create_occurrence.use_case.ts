import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { OcorrenciaRepository } from "../ocorrencia.repository";
import { Ocorrencia } from "../entities/ocorrencia.entity";
import { CreateOcorrenciaDto } from "../dto/create-ocorrencia.dto";

@Injectable()
export class CreateOccurrence {
  constructor(
    private readonly occurrenceRepository: OcorrenciaRepository,
  ) {}

  async exec(data: CreateOcorrenciaDto): Promise<{ status: number; data: Ocorrencia }> {
    try {
      const ocorrencia = await this.occurrenceRepository.createOccurrence(data);
      return {
        status: 201,
        data: ocorrencia,
      };
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar ocorrência');
    }
  }
}
