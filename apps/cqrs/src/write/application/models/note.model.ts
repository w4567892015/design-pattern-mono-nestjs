import { AggregateRoot } from '@nestjs/cqrs';

import { NoteCreatedEvent } from '../events/impl/create-note.event';
import { NoteActivateEvent } from '../events/impl/activate-note.event';
import { NoteCreatedTagEvent } from '../events/impl/create-note-tag.event';

export class NoteAggregate extends AggregateRoot {
  constructor() {
    super();
  }

  create(id: string, title: string, content: string) {
    this.apply(new NoteCreatedEvent(id, title, content));
  }

  activate(id: string) {
    this.apply(new NoteActivateEvent(id));
  }

  tag(id: string, tag: string) {
    this.apply(new NoteCreatedTagEvent(id, tag));
  }
}
