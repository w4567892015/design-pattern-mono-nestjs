import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { NoteRepo } from '../../repository/note.repo';
import { QueryHandlers } from '../application/queries';

import { NoteReadController } from './controller';

@Module({
  imports: [CqrsModule],
  controllers: [NoteReadController],
  providers: [
    NoteRepo,
    ...QueryHandlers,
  ],
})
export class ReadModule {}
