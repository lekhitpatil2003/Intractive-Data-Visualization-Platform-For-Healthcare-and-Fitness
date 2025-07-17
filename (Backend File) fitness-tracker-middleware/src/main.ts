import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Set up Swagger
  const config = new DocumentBuilder()
    .setTitle('Fitness Tracker API')
    .setDescription('CRUD operations for managing Fitness App Operations')
    .setVersion('2.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5173'], // or ['http://localhost:3000']
    methods: ["GET", "POST","PUT", "DELETE","PATCH"],
    credentials: true,              // allow cookies or Authorization headers
  });
  
  app.useStaticAssets(join(__dirname, '..', 'uploads'));
  
  await app.listen(process.env.PORT ?? 8001);
}
bootstrap();
