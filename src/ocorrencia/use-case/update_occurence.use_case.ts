import { Injectable, NotFoundException } from "@nestjs/common";
import { OcorrenciaRepository } from "../ocorrencia.repository";
import { UpdateOcorrenciaDto } from "../dto/update-ocorrencia.dto";

@Injectable()
export class UpdateOccurrence {
  constructor(private readonly occurrenceRepository: OcorrenciaRepository) {}

  async exec(id: string, data: UpdateOcorrenciaDto): Promise<{ status: number }> {
    const ocorrencia = await this.occurrenceRepository.getOccurenceById(id);

    if (!ocorrencia) {
      throw new NotFoundException('Ocorrência não encontrada');
    }

    await this.occurrenceRepository.updateOccurrence(id, data);

    return { status: 204 };
  }
}