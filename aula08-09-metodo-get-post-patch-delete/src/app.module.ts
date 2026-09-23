import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConvidadosConstroller } from './convidados.controller.js';
import { ConvidadosService } from './convidados.service.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [],
  controllers: [AppController, ConvidadosConstroller],
  providers: [AppService, ConvidadosService],
})
export class AppModule {}
