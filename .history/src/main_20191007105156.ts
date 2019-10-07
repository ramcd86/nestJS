import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';
import * as Handlebars from 'handlebars';

// declare const Handlebars: any

Handlebars.registerPartial('testPartial', '{{testpartial}}');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setViewEngine('ejs');
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  console.log('Application running on http://localhost:3200');
  await app.listen(3200);
}
bootstrap();
