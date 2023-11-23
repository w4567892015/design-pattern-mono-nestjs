import { Injectable } from '@nestjs/common';
import { AccountState } from '../interfaces/state.interface';

import { AccountStateService } from '../../account.service';

@Injectable()
export class SuspendedState implements AccountState {
  constructor(
    private readonly accountStateService: AccountStateService
  ){}

  handleInactive(): void {
    throw new Error('Method not implemented.');
  }
  handleActive(): void {
    this.accountStateService.setState(this.accountStateService.activeState);
  }
  handleLocked(): void {
    throw new Error('Method not implemented.');
  }
  handleSuspended(): void {
    console.log('Account is already Suspended');
  }
  handleDeleted(): void {
    this.accountStateService.setState(this.accountStateService.deletedState);
  }

}
