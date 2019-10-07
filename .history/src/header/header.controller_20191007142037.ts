import { Get, Post, Body, Param, Controller, Render, Res } from '@nestjs/common';
import { AppService } from './../app.service';
import { Response } from 'express';


@Controller()
export class HeaderController {

  public headerObject: string;

  constructor(private readonly appService: AppService) {

    this.headerObject = 'test'

  }

  @Render('partials/header')
  @Get('*')
  root(@Res() res: Response) {
      const headerObject = {
          link1: 'Link 1'
      }

      console.log('fired');

      return { headerObject }

      // return res.render('partials/header', {
      //   headerObject: 'link 1'
      // })
  }

}
