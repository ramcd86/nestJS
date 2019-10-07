import { Get, Post, Body, Param, Controller, Render, Res } from '@nestjs/common';
import { Router } from ''
import { AppService } from './app.service';
import { Response } from 'express';

export interface IIncomingMessage {
  content: string;
  submittedBy: string;
}

@Controller('account')
export class AppController {

  public baseUrl: string = "account";
  public postedMessage: IIncomingMessage;

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
  public postedContent(@Body() message: IIncomingMessage, @Res() res: Response) {
    console.log(message);
    if ((!message.content) || (!message.submittedBy)) {
      return "Error!"
    }
    this.postedContentSubController(message);
    return res.redirect('/subcontroller')
  }

  @Render('subcontroller')
  @Get('sub')
  public postedContentSubController(message: IIncomingMessage): any {
    return { message }
  }
}
