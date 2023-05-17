import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { CORS } from './constans';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const env = app.get(ConfigService);
  // Morgan para los log´s
  app.use(morgan('dev'));
  // Prefijo para todos los endpoints
  app.setGlobalPrefix('api');
  // Cors
  app.enableCors(CORS);
  await app.listen(env.get('PORT'));
  console.log('Server runnign on ', await app.getUrl());
}
bootstrap();
