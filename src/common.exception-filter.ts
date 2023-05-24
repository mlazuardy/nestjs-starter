import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response } from "express";

@Catch(HttpException)
export class CommonExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log("exception filter called", exception.getResponse());
    const res = host.switchToHttp().getResponse<Response>();
    const status = exception.getStatus();
    res.status(status).json({
      statusCode: status,
      errors: exception.getResponse(),
      message: "Common exception message"
    })
  }
}
