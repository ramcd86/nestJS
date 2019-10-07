import { IIncomingMessage } from './../.history/src/test.controller_20191007144732';
import { Get, Post, Body, Param, Controller, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

export interface IIncomingMessage {
  content?: string;
  submittedBy?: string;
  error?: string;
}


@Controller('test')
export class TestController {

  public applicationState: any;

  constructor(private readonly appService: AppService) {


    this.applicationState = {
        headerState: this.appService.getHeaderMenuState(),
        testViewState: this.testView(),
        postedMessage: {} as IIncomingMessage
    }

  }


  public testView(): string {
    return 'Test view';
  }
  

  @Render('test')
  @Get()
  public testRender(): any {
    const viewData = this.applicationState;
    return { viewData }
  }

  @Post()
  public postedContent(@Body() message: IIncomingMessage, @Res() res: Response): void {
    console.log(message);
    if ((!message.content) || (!message.submittedBy)) {
      this.applicationState.postedMessage.content = message.content ? message.content : 'Content Not Defined!';
      this.applicationState.postedMessage.content = message.submittedBy ? message.submittedBy : 'submittedBy Not Defined!';
      this.applicationState.postedMessage.error = "Error 1!"
    } else {
      this.applicationState.postedMessage = message;
    }

    return res.redirect('/sub');
  }

  @Render('subcontroller')
  @Get('sub')
  public postedContentSubController(): any {
    let viewData: IIncomingMessage = {};
    if (this.applicationState.postedMessage) {
        viewData = this.applicationState.postedMessage;
    } else {
        viewData.error = "Error 2!";
    }
    return { viewData }
  }
}
