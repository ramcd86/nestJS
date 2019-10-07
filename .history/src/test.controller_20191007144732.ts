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
        testViewState: this.testView()
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

//   @Post('test')
//   public postedContent(@Body() message: IIncomingMessage, @Res() res: Response): void {
//     console.log(message);
//     if ((!message.content) || (!message.submittedBy)) {
//       this.postedMessage.content = message.content ? message.content : 'Content Not Defined!';
//       this.postedMessage.content = message.submittedBy ? message.submittedBy : 'submittedBy Not Defined!';
//       this.postedMessage.error = "Error 1!"
//     } else {
//       this.postedMessage = message;
//     }

//     return res.redirect('/sub');
//   }

//   @Render('subcontroller')
//   @Get('sub')
//   public postedContentSubController(): any {
//     let message: IIncomingMessage = {};
//     if (this.postedMessage) {
//       message = this.postedMessage;
//     } else {
//       message.error = "Error 2!";
//     }
//     return { message }
//   }
}
