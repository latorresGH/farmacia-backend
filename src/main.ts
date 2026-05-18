import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();

  console.log('JWT_SECRET:', process.env.JWT_SECRET);

  const app = await NestFactory.create(AppModule);

  app.use((req: any, res: any, next: any) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    next();
  });

  app.enableCors({
    origin: '*',
  });

  await app.listen(process.env.PORT ?? 3005);
}
bootstrap();