import { Get, Post, Body, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {

  }



  // @Render('index')
  @Post()
  createMessage(@Body() message: any){
    console.log(message);
    return message;
  }
  // render() {
  //   const message = {
  //     hello: this.appService.getHello(),
  //     myTest: this.appService.getMyTestString()
  //   }
  //   return { message };
  // }
}
