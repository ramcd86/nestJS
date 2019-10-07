import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setViewEngine('hbs');
  console.log('Application running on http://localhost:3200');
  await app.listen(3200);
}
bootstrap();
