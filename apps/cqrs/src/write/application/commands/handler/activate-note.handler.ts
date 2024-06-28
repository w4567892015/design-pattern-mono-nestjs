import { Logger } from '@nestjs/common';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';

import { ActivateNoteCommand } from '../impl/activate-note.command';
import { NoteAggregate } from '../../models/note.model';


@CommandHandler(ActivateNoteCommand)
export class ActivateNoteHandler implements ICommandHandler<ActivateNoteCommand> {
  private logger: Logger = new Logger(ActivateNoteHandler.name);

  constructor(
    private readonly publisher: EventPublisher,
  ){}

  async execute(command: ActivateNoteCommand): Promise<any> {
    this.logger.log(`Async ${this.constructor.name} >>> ${command.constructor.name}`);

    const { id } = command;

    const note  = this.publisher.mergeObjectContext(new NoteAggregate());
    note.activate(id);
    note.commit();

    return {
      id,
      status: 'active',
    }
  }
}
