import { Module } from '@nestjs/common';

import { ReadModule } from './read/infastructure/module';
import { WriteModule } from './write/infastructure/module';

import { RootController } from './root/root.controller';
import { RootService } from './root/root.service';

@Module({
  imports: [ReadModule, WriteModule],
  controllers: [RootController],
  providers: [RootService],
})
export class RootModule {}
