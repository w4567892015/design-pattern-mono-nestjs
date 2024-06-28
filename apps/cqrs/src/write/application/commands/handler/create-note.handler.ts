import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { CreateNoteCommand } from '../impl/create-note.command';
import { NoteAggregate } from '../../models/note.model';


@CommandHandler(CreateNoteCommand)
export class CreateNoteHandler implements ICommandHandler<CreateNoteCommand> {
  constructor(
    private readonly publisher: EventPublisher,
  ){}

  async execute(command: CreateNoteCommand): Promise<any> {
    console.log(`Async ${this.constructor.name}...`, command.constructor.name);

    const { title, content } = command;
    const id = Math.random().toString(36).substring(7);

    const note  = this.publisher.mergeObjectContext(new NoteAggregate());
    note.create(id, title, content);
    note.commit();

    return {
      id,
      title,
      content,
    }
  }
}
