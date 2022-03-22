import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { join } from 'path';
import { AppModule } from './app.module';
const cors = require("cors")
async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
    app.use(express.static(join(process.cwd(), './files/')));
    await app.listen(5000);
  } catch (error) {
    console.log(error)
  }
}
bootstrap();
