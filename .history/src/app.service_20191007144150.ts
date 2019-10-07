import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getMyTestString(): string {
    return 'Test string';
  }
  getHeaderMenUState(): any {
    return {
      linkOne: 'Link One',
      linkTwo: 'link Two',
      linkThree: 'link Three'
    }
  }
}
