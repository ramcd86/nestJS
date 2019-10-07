import { Get, Post, Body, Param, Controller, Render, Res } from '@nestjs/common';
import { AppService } from './../app.service';
import { Response } from 'express';


@Controller()
export class HeaderController {


  constructor(private readonly appService: AppService) {

  }

  @Render('partials/header')
  @Get('*')
  root(@Res() res: Response) {
      const headerObject = {
          link1: 'Link 1'
      }

      return res.render('hes')
  }

}
