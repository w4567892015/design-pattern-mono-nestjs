import { Controller, Get, Param } from '@nestjs/common';

import { QueryBus } from '@nestjs/cqrs';

import { GetNoteQuery } from '../application/queries/impl/get-note.query';

@Controller()
export class NoteReadController {
  constructor(
    private readonly queryBus: QueryBus,
  ) {}

  @Get('/note')
  async getNote(): Promise<string> {
    return this.queryBus.execute(new GetNoteQuery());
  }

  @Get('/note/:id')
  async getNoteById(
    @Param('id') id: string,
  ): Promise<string> {
    return this.queryBus.execute(new GetNoteQuery(id));
  }
}
