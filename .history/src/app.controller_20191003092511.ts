import { Get, Post, Body, Param, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

export interface IIncomingMessage {
  content: string;
  submittedBy: string;
}

@Controller('account')
export class AppController {

  public baseUrl: string = "account";

  constructor(private readonly appService: AppService) {

  }


  @Render('index')
  @Get('')
  public indexRender(): any {
    const message = "Index test.";
    return { message }
  }

  @Render('test')
  @Get('test')
  public testRender(): any {
    const test = "Test test.";
    return { test }
  }

  @Post('test')
  postedContent(@Body() message: IIncomingMessage) {
    console.log(message);
    return message;
  }
}
