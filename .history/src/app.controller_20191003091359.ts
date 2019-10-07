import { Get, Post, Body, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {

  }



  @Render('index')
  @Get('')
  indexRender() {
    const message = "Index test.";
    return { message }
  }

  @Render('test')
  @Get('/test')
  testRender() {
    const message = "Test test.";
    return { test }
  }


  // @Get('dog')
  // createMessage(@Body() message: any){
  //   console.log(message);
  //   return message;
  // }

  // @Post()
  // log() {
  //   console.log('log')
  // }
  // render() {
  //   const message = {
  //     hello: this.appService.getHello(),
  //     myTest: this.appService.getMyTestString()
  //   }
  //   return { message };
  // }
}
