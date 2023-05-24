import { Controller, UseFilters } from '@nestjs/common';
import { TypedBody, TypedRoute } from '@nestia/core';
import { CommonExceptionFilter } from './common.exception-filter';

export interface TestInput {
  /**
   * @minLength 3
   */
  firstName: string;

  /**
   * @minLength 3
   */
  lastName: string;
}

@Controller()
@UseFilters(CommonExceptionFilter)
export class AppController {
  @TypedRoute.Post()
  index(@TypedBody() data: TestInput) {
    return {
      data
    }
  }
}
