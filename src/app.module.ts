import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OcorrenciaModule } from './ocorrencia/ocorrencia.module';
import 'dotenv/config'


const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  throw new Error('MONGO_URL is not defined in the environment variables.');
}

@Module({
  imports: [
    MongooseModule.forRoot(mongoUrl),
    OcorrenciaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
