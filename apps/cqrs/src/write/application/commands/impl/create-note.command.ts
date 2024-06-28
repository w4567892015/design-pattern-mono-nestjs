import { ICommand } from '@nestjs/cqrs';

export class CreateNoteCommand implements ICommand {
  constructor(
    public readonly title: string,
    public readonly content: string
  ) {}
}
