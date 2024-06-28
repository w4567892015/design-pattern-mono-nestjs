import { ICommand } from '@nestjs/cqrs';

export class ActivateNoteCommand implements ICommand {
  constructor(public readonly id: string) {}
}
