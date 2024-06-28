import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { NoteRepo } from '../../../../repository/note.repo';

import { NoteCreatedEvent } from '../impl/create-note.event';

@EventsHandler(NoteCreatedEvent)
export class NoteCreateHandler implements IEventHandler<NoteCreatedEvent> {
  private logger: Logger = new Logger(NoteCreateHandler.name);

  constructor(
    private noteRepository: NoteRepo,
  ) {}
  handle(event: NoteCreatedEvent) {
    const { data } = event;
    this.logger.log(`Run ${event.constructor.name}`);
    this.noteRepository.create(data.id, data.title, data.content);
  }
}
