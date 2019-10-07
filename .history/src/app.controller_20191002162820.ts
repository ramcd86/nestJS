import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {

  }

  @Render('index')
  @Get()
  render() {
    const message = {
      hello: this.appService.getHello(),
      myTest: this.appService.getMyTestString();
    }
    return { message };
  }
}
