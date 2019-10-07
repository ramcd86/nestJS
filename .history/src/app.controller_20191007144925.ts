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

  public applicationState: any;

  constructor(private readonly appService: AppService) {

    this.applicationState = {
        headerState: this.appService.getHeaderMenuState(),
        indexViewState: this.indexView()
    }

  }

  public indexView(): string {
    return 'Index view';
  }

  

  @Render('index')
  @Get()
  public testRender(): any {
    console.log(this.applicationState.headerState.linkOne)
    const viewData = this.applicationState;
    return { viewData }
  }
  
}
