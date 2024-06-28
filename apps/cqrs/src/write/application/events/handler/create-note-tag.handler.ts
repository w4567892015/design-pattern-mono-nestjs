import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { NoteRepo } from '../../../../repository/note.repo';

import { NoteCreatedTagEvent } from '../impl/create-note-tag.event';

@EventsHandler(NoteCreatedTagEvent)
export class NoteCreateTagHandler implements IEventHandler<NoteCreatedTagEvent> {
  private logger: Logger = new Logger(NoteCreateTagHandler.name);
  constructor(
    private noteRepository: NoteRepo,
  ) {}
  handle(event: NoteCreatedTagEvent) {
    this.logger.log(`Run ${event.constructor.name}`);
    this.noteRepository.setTag(event.id, event.tag);
  }
}
