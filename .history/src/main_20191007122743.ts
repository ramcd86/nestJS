import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';

const PORT = '4000'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use((req: any, res: any, next: any) => {
  //   res.locals = {
  //     headerObject: {
  //       link1: 'link 1'
  //     }
  //   }
  // })
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  console.log(`Application running on http://localhost:${PORT}`);
  await app.listen(PORT);
}
bootstrap();
