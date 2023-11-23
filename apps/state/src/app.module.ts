import { Module } from '@nestjs/common';

import { AccountStateController } from './account.controller';
import { AccountStateService } from './account.service';

@Module({
  imports: [],
  controllers: [AccountStateController],
  providers: [AccountStateService],
})
export class AppModule {}
