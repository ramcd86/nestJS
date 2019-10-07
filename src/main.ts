import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';

const PORT = '4100'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  console.log(`Application running on http://localhost:${PORT}`);
  await app.listen(PORT);
}
bootstrap();
