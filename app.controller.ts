import { Controller, Get, Render} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    }
}
