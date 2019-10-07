
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
    if ((!message.content) || (!message.submittedBy)) {
        let dataToPost: IIncomingMessage = {
            content: message.content ? message.content : 'Content Not Defined!',
            submittedBy: message.content ? message.content : 'Content Not Defined!',
            error: 'Error 1'
        }
        this.appService.setPosted(dataToPost);
    } else {
        this.appService.setPosted(message)
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
