import { Get, Post, Body, Param, Controller, Render, Res } from '@nestjs/common';
import { AppService } from './../app.service';
import { Response } from 'express';


@Controller()
export class AppController {


  constructor(private readonly appService: AppService) {

  }

  @Render('header')
  @Get('')
  headerRender(): any {
      const headerObject = {
          link1: 'Link'
      }
      return { headerObject }
  }

}
