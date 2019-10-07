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
        headerState: this.appService.getHeaderMenuState()
    }

  }

  

  @Render('index')
  @Get()
  public testRender(): any {
    const viewData = this.applicationState;
    return { viewData }
  }
  
}
