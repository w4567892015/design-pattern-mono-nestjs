import { Injectable } from '@nestjs/common';
import { AccountState } from '../interfaces/state.interface';

import { AccountStateService } from '../../account.service';

@Injectable()
export class ActiveState implements AccountState {
  constructor(
    private readonly accountStateService: AccountStateService
  ){}

  handleInactive(): void {
    this.accountStateService.setState(this.accountStateService.inactiveState);
  }
  handleActive(): void {
    console.log('Account is already Active');
  }
  handleLocked(): void {
    this.accountStateService.setState(this.accountStateService.lockedState);
  }
  handleSuspended(): void {
    this.accountStateService.setState(this.accountStateService.suspendedState);
  }
  handleDeleted(): void {
    this.accountStateService.setState(this.accountStateService.deletedState);
  }
}
