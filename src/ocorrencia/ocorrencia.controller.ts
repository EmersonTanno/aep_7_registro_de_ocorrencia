import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { OcorrenciaService } from './ocorrencia.service';
import { CreateOcorrenciaDto } from './dto/create-ocorrencia.dto';
import { UpdateOcorrenciaDto } from './dto/update-ocorrencia.dto';
import { GetAllOccurrence } from './use-case/get_all_occurrence.use_case';
import { Response } from 'express';
import { Ocorrencia } from './entities/ocorrencia.entity';
import { CreateOccurrence } from './use-case/create_occurrence.use_case';

@Controller('ocorrencia')
export class OcorrenciaController {
  constructor(private readonly ocorrenciaService: OcorrenciaService,
    private readonly getAllOcurrence: GetAllOccurrence,
    private readonly createOccurrence: CreateOccurrence,
  ) {}

  @Post()
  async create(@Body() ocorrencia: CreateOcorrenciaDto, @Res() res: Response) {
    const result = await this.createOccurrence.exec(ocorrencia);

    return res.sendStatus(result.status);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const result = await this.getAllOcurrence.exec()

    return res.status(result.status).send(result.data)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ocorrenciaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOcorrenciaDto: UpdateOcorrenciaDto) {
    return this.ocorrenciaService.update(+id, updateOcorrenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ocorrenciaService.remove(+id);
  }
}
