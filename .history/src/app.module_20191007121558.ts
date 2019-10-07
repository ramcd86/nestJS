import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HeaderController } from './header/header.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, HeaderController],
  providers: [AppService],
})
export class AppModule {}
