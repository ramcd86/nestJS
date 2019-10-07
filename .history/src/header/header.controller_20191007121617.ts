import { Get, Post, Body, Param, Controller, Render, Res } from '@nestjs/common';
import { AppService } from './../app.service';
import { Response } from 'express';


@Controller()
export class HeaderController {


  constructor(private readonly appService: AppService) {

  }

  @Render('header/header')
  @Get('/test')
  headerRender(): any {
      const headerObject = {
          link1: 'Link'
      }
      return { headerObject }
  }

}
