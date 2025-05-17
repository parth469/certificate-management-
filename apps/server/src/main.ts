import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    }

  });

  app.enableVersioning({
    defaultVersion: '0',
    type: VersioningType.URI
  })

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
