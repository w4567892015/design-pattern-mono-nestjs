import { Injectable } from '@nestjs/common';
import { AccountState } from '../interfaces/state.interface';

import { AccountStateService } from '../../account.service';

@Injectable()
export class InactiveState implements AccountState {
  constructor(
    private readonly accountStateService: AccountStateService
  ){}

  handleInactive(): void {
    console.log('Account is already Inactive');
  }
  handleActive(): void {
    this.accountStateService.setState(this.accountStateService.activeState);
  }
  handleLocked(): void {
    this.accountStateService.setState(this.accountStateService.lockedState);
  }
  handleSuspended(): void {
    throw new Error('Method not implemented.');
  }
  handleDeleted(): void {
    this.accountStateService.setState(this.accountStateService.deletedState);
  }
}
