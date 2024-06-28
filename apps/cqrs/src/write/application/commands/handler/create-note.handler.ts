import { Logger } from '@nestjs/common';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { CreateNoteCommand } from '../impl/create-note.command';
import { NoteAggregate } from '../../models/note.model';


@CommandHandler(CreateNoteCommand)
export class CreateNoteHandler implements ICommandHandler<CreateNoteCommand> {
  private logger: Logger = new Logger(CreateNoteHandler.name);

  constructor(
    private readonly publisher: EventPublisher,
  ){}

  async execute(command: CreateNoteCommand): Promise<any> {
    this.logger.log(`Async ${this.constructor.name} >>> ${command.constructor.name}`);

    const id = Math.random().toString(36).substring(7);

    const note  = this.publisher.mergeObjectContext(new NoteAggregate());
    note.create({ id, ...command });
    note.commit();

    return {
      id,
      ...command,
    }
  }
}
