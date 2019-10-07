import { Get, Post, Body, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller('account')
export class AppController {

  public baseUrl: string;

  constructor(private readonly appService: AppService) {

    this.baseUrl = 'account';

  }


  @Render('index')
  @Get('')
  public indexRender(): any {
    const message = "Index test.";
    return { message }
  }

  @Render('test')
  @Get(this.baseUrl + '/test')
  public testRender(): any {
    const test = "Test test.";
    return { test }
  }

}
