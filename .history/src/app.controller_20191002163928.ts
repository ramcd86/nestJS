import { Get, Post, Body, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller('hello')
export class AppController {

  constructor(private readonly appService: AppService) {

  }



  // @Render('index')
  @Post()
  createMessage(@Body() message: any){
    console.log(message);
    return message;
  }

  @Post()
  log() {
    console.log('log')
  }
  // render() {
  //   const message = {
  //     hello: this.appService.getHello(),
  //     myTest: this.appService.getMyTestString()
  //   }
  //   return { message };
  // }
}
