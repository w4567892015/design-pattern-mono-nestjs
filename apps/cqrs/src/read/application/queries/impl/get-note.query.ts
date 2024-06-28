import { IQuery } from '@nestjs/cqrs';

export class GetNoteQuery implements IQuery {
  constructor(
    public readonly id?: string,
    public readonly title?: string,
    public readonly content?: string
  ) {}
}
