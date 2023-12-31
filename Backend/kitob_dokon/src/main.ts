import { Body, Res, ValidationPipe } from '@nestjs/common';
import { APP_PIPE, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

const start = async() => {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    const PORT = process.env.API_PORT || 3000

    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix('api')

    await app.listen(PORT, () => {
      console.log(`Server Listen on ${PORT} port`);
    });
  } catch (error) {
    console.log(error);
  }
}
start()