import { Get, Post, Body, Param, Controller, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

export interface IIncomingMessage {
  content?: string;
  submittedBy?: string;
  error?: string;
}

@Controller()
export class AppController {

  public baseUrl: string = "account";
  public postedMessage: IIncomingMessage;

  constructor(private readonly appService: AppService) {

    this.postedMessage = {};

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
  public postedContent(@Body() message: IIncomingMessage, @Res() res: Response) {
    console.log(message);
    if ((!message.content) || (!message.submittedBy)) {

      this.postedMessage.error = "Error 1!"
    } else {
      this.postedMessage = message;
    }

    return res.redirect('/sub');
  }

  @Render('subcontroller')
  @Get('sub')
  public postedContentSubController(): any {
    let message: IIncomingMessage = {};
    if (this.postedMessage) {
      message = this.postedMessage;
    } else {
      message.error = "Error 2!";
    }
    return { message }
  }
}
