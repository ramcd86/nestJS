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

  @Get('')
  public headerData(): any {
    this.count++;
    console.log(`beepo ${this.count}`);
  }
  
}
