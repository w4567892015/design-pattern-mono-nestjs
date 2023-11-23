import { Controller, Get } from '@nestjs/common';
import { AccountStateService } from './account.service';

@Controller()
export class AccountStateController {
  constructor(private readonly accountStateService: AccountStateService) {}

  @Get('active')
  active(): string {
    this.accountStateService.active();
    return 'The Account is active!';
  }

  @Get('locked')
  locked(): string {
    this.accountStateService.locked();
    return 'The Account is locked!';
  }

  @Get('suspended')
  suspended(): string {
    this.accountStateService.suspended();
    return 'The Account is suspended!';
  }

  @Get('delete')
  delete(): string {
    this.accountStateService.delete();
    return 'The Account is deleted!';
  }
}
