import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Ocorrencia } from "./entities/ocorrencia.entity";
import { Model } from "mongoose";
import { CreateOcorrenciaDto } from "./dto/create-ocorrencia.dto";
import { UpdateOcorrenciaDto } from "./dto/update-ocorrencia.dto";

@Injectable()
export class OcorrenciaRepository {
    constructor(
        @InjectModel(Ocorrencia.name) private readonly ocorrenciaModel: Model<Ocorrencia>
    ) {}

    async createOccurrence(ocorrencia: CreateOcorrenciaDto) {
        const occurrencie = await this.ocorrenciaModel.create(ocorrencia);
        return occurrencie;
    }

    async getAllOccurrencies(): Promise<Ocorrencia[]> {
        const occurrencies : Ocorrencia[] = await this.ocorrenciaModel.find();
        return occurrencies;
    }

    async getOccurenceById(id: string): Promise<Ocorrencia | null>{
        const ocorrencia = await this.ocorrenciaModel.findById(id);
        return ocorrencia;
    }

    async updateOccurrence(id: string, data: UpdateOcorrenciaDto) {
        return await this.ocorrenciaModel.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteOccurrence(id: string) {
        return await this.ocorrenciaModel.findByIdAndDelete(id);
    }
}