import { NestFactory } from '@nestjs/core';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

// import { connect as connectToEventStore } from './event_store';

import { RootModule } from './root.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    RootModule,
    new FastifyAdapter({ logger: true })
  );
  // await connectToEventStore();
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
