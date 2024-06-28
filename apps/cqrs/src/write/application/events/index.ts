import { NoteCreateHandler } from './handler/create-note.handler';
import { NoteActivateHandler } from './handler/activate-note.handler';
import { NoteCreateTagHandler } from './handler/create-note-tag.handler';

export const EventHandlers = [NoteCreateHandler, NoteActivateHandler, NoteCreateTagHandler];
