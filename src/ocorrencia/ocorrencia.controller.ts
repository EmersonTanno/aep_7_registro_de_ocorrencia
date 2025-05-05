import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { OcorrenciaService } from './ocorrencia.service';
import { CreateOcorrenciaDto } from './dto/create-ocorrencia.dto';
import { UpdateOcorrenciaDto } from './dto/update-ocorrencia.dto';
import { GetAllOccurrence } from './use-case/get_all_occurrence.use_case';
import { Response } from 'express';
import { Ocorrencia } from './entities/ocorrencia.entity';
import { CreateOccurrence } from './use-case/create_occurrence.use_case';
import { GetOccurrenceById } from './use-case/get_occurrence_by_id.use_case';
import { DeleteOccurrence } from './use-case/delete_occurrence.use_case';
import { UpdateOccurrence } from './use-case/update_occurence.use_case';

@Controller('ocorrencia')
export class OcorrenciaController {
  constructor(private readonly ocorrenciaService: OcorrenciaService,
    private readonly getAllOcurrence: GetAllOccurrence,
    private readonly createOccurrence: CreateOccurrence,
    private readonly getOccurrenceById: GetOccurrenceById,
    private readonly deleteOccurrence: DeleteOccurrence,
    private readonly updateOccurrence: UpdateOccurrence,
  ) {}

  @Post()
  async create(@Body() ocorrencia: CreateOcorrenciaDto, @Res() res: Response) {
    const result = await this.createOccurrence.exec(ocorrencia);

    return res.status(result.status).send();
  }

  @Get()
  async findAll() {
    const result = await this.getAllOcurrence.exec()

    return result.data;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.getOccurrenceById.exec(id);
    return result.data;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateOcorrenciaDto, @Res() res: Response) {
    const result = await this.updateOccurrence.exec(id, data);
    return res.status(result.status).send();
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const result = await this.deleteOccurrence.exec(id);
    return res.status(result.status).send();
  }
}
