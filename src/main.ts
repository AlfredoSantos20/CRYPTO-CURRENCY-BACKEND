import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { config } from 'dotenv'; // Import config from dotenv

async function bootstrap() {
  config(); // Load environment variables from .env file
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
