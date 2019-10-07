import { Get, Post, Body, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {

  }


  @Render('index')
  @Get('')
  public indexRender(): any {
    const message = "Index test.";
    return { message }
  }

  @Render('test')
  @Get('/test')
  public testRender(): any {
    const message = "Test test.";
    return { test }
  }

}
