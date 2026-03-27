import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();

  console.log('JWT_SECRET:', process.env.JWT_SECRET);

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // dev rápido
  });
  await app.listen(process.env.PORT ?? 3005);
}
bootstrap();
