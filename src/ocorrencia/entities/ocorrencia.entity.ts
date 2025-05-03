import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Ocorrencia 
{
    @Prop({required:true})
    nameOccurrence: string;

    @Prop({required:true})
    namePerson: string;

    @Prop({required:true})
    descricaoOccurrence: string

    @Prop({required:true})
    dateOccurrence: Date;

    @Prop({required:true})
    localOccurrence: string;
}

export type OcorrenciaDocument = Ocorrencia & Document;
export const OcorrenciaSchema = SchemaFactory.createForClass(Ocorrencia);