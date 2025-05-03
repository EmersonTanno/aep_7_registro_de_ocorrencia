import { Module } from '@nestjs/common';
import { OcorrenciaService } from './ocorrencia.service';
import { OcorrenciaController } from './ocorrencia.controller';
import { GetAllOccurrence } from './use-case/get_all_occurrence.use_case';
import { MongooseModule } from '@nestjs/mongoose';
import { Ocorrencia, OcorrenciaSchema } from './entities/ocorrencia.entity';
import { OcorrenciaRepository } from './ocorrencia.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Ocorrencia.name, schema: OcorrenciaSchema}])
  ],
  controllers: [
    OcorrenciaController
  ],
  providers: [OcorrenciaService,
    OcorrenciaRepository,
    GetAllOccurrence,
  ],
})
export class OcorrenciaModule {}
