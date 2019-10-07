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
  public headerObject: string;
  public count: number;

  constructor(private readonly appService: AppService) {

    this.postedMessage = {};
    this.count = 0;
    // this.headerObject = 'Test headerObject string';

  }


  @Render('index')
  @Get('')
  public indexRender(): any {
    this.headerObject = 'Test headerObject string';
    const message = "Index test1";
    return { message }
  }

  @Get('*')
  public headerData(): any {
    this.count++;
    console.log(`beepo ${this.count}`);
  }
  

  @Render('test')
  @Get('test')
  public testRender(): any {
    const test = "Test test.";
    return { test }
  }

  @Post('test')
  public postedContent(@Body() message: IIncomingMessage, @Res() res: Response): void {
    console.log(message);
    if ((!message.content) || (!message.submittedBy)) {
      this.postedMessage.content = message.content ? message.content : 'Content Not Defined!';
      this.postedMessage.content = message.submittedBy ? message.submittedBy : 'submittedBy Not Defined!';
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
