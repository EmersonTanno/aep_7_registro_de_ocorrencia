import { Module } from '@nestjs/common';
import { OcorrenciaService } from './ocorrencia.service';
import { OcorrenciaController } from './ocorrencia.controller';
import { GetAllOccurrence } from './use-case/get_all_occurrence.use_case';
import { MongooseModule } from '@nestjs/mongoose';
import { Ocorrencia, OcorrenciaSchema } from './entities/ocorrencia.entity';
import { OcorrenciaRepository } from './ocorrencia.repository';
import { CreateOccurrence } from './use-case/create_occurrence.use_case';
import { GetOccurrenceById } from './use-case/get_occurrence_by_id.use_case';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Ocorrencia.name, schema: OcorrenciaSchema}])
  ],
  controllers: [
    OcorrenciaController
  ],
  providers: [OcorrenciaService,
    OcorrenciaRepository,
    CreateOccurrence,
    GetAllOccurrence,
    GetOccurrenceById,
  ],
})
export class OcorrenciaModule {}
