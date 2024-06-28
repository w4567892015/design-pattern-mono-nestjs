import { NoteCreateHandler } from './handler/create-note.handler';
import { NoteActivateHandler } from './handler/activate-note.handler';

export const EventHandlers = [NoteCreateHandler, NoteActivateHandler];
