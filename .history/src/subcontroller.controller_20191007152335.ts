
import { Get, Post, Body, Param, Controller, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

export interface IIncomingMessage {
  content?: string;
  submittedBy?: string;
  error?: string;
}


@Controller('sub')
export class SubController {

  public applicationState: any;

  constructor(private readonly appService: AppService) {

    this.applicationState = {
        headerState: this.appService.getHeaderMenuState(),
        testViewState: this.subView(),
        postedMessage: this.appService.getPosted()
    }

  }

  public subView(): string {
      return 'Sub view'
  }

  @Render('subcontroller')
  @Get()
  public postedContentSubController(): any {
    const viewData = this.applicationState;
    console.log(viewData)
    return { viewData }
  }
}
