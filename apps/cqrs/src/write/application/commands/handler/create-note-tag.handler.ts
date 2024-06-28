import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { CreateNoteTagCommand } from '../impl/create-note-tag.command';
import { NoteAggregate } from '../../models/note.model';


@CommandHandler(CreateNoteTagCommand)
export class CreateNoteTagHandler implements ICommandHandler<CreateNoteTagCommand> {
  constructor(
    private readonly publisher: EventPublisher,
  ){}

  async execute(command: CreateNoteTagCommand): Promise<any> {
    console.log(`Async ${this.constructor.name}...`, command.constructor.name);

    const { id, tag } = command;

    const note  = this.publisher.mergeObjectContext(new NoteAggregate());
    note.tag(id, tag);
    note.commit();

    return {
      id,
    }
  }
}
