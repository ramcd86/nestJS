import { IIncomingMessage } from './../.history/src/app.controller_20191007143740';

import { Injectable } from '@nestjs/common';

export interface IIncomingMessage {
  content?: string;
  submittedBy?: string;
  error?: string;
}

@Injectable()
export class AppService {

  public postedData: IIncomingMessage = {
    content: '',
    submittedBy: '',
    error: ''
  }

  getHello(): string {
    return 'Hello World!';
  }
  getMyTestString(): string {
    return 'Test string';
  }
  getHeaderMenuState(): any {
    return {
      linkOne: 'Link One',
      linkTwo: 'link Two',
      linkThree: 'link Three'
    }
  }
  setPosted(incomingMessage): void {
    this.postedData = incomingMessage; 
  }

  getPosted(): IIncomingMessage {
    return this.postedData;
  }
}
