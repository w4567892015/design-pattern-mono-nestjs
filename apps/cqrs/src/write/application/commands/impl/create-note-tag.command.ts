import { ICommand } from '@nestjs/cqrs';

export class CreateNoteTagCommand implements ICommand {
  constructor(
    public readonly id: string,
    public readonly tag: string
  ) {}
}
