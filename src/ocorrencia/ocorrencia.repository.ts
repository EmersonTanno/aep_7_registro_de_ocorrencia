import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Ocorrencia } from "./entities/ocorrencia.entity";
import { Model } from "mongoose";

@Injectable()
export class OcorrenciaRepository {
    constructor(
        @InjectModel(Ocorrencia.name) private readonly ocorrenciaModel: Model<Ocorrencia>
    ) {}
    
    async createOccurrence(ocorrencia: Ocorrencia) {
        const occurrencie = await this.ocorrenciaModel.create(ocorrencia);
        return occurrencie;
    }

    async getAllOccurrencies(): Promise<Ocorrencia[]> {
        const occurrencies : Ocorrencia[] = await this.ocorrenciaModel.find();
        return occurrencies;
    }
}