import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? PORT);
  console.log(`Application is running on: http://localhost:${PORT}`);
}
bootstrap().catch((error) => {
  console.log('Chyba pri spúšťaní aplikácie:', error);
  process.exit(1);
});
