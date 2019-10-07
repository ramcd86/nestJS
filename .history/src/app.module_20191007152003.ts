import { SubController } from './subcontroller.controller';
import { TestController } from './test.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HeaderController } from './header/header.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, HeaderController, TestController],
  providers: [AppService],
})
export class AppModule {}
