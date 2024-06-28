import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { NoteRepo } from '../../repository/note.repo';
import { CommandHandlers, Sagas } from '../application/commands';
import { EventHandlers } from '../application/events';

import { NoteWriteController } from './controller';

@Module({
  imports: [CqrsModule],
  controllers: [NoteWriteController],
  providers: [
    NoteRepo,
    ...CommandHandlers,
    ...EventHandlers,
    ...Sagas,
  ],
})
export class WriteModule {}
