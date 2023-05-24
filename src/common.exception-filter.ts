import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
} from "@nestjs/common";
import { Response } from "express";

@Catch(BadRequestException)
export class CommonExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse<Response>();
    const errResponse = exception.getResponse() as any;
    const status = exception.getStatus();

    const json: Record<string, any> = {
      statusCode: status,
    };

    if (typeof errResponse === "object" && errResponse.errors?.length) {
      json.errors = errResponse.errors;
      json.message = errResponse.message;
    }

    return res.status(status).json(json);
  }
}
