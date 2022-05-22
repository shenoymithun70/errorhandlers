import { GeneralError } from "./general-error";

export class ForbiddenError extends GeneralError {
  statusCode = 403;

  constructor() {
    super("Access Denied");

    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: "Access Denied",
      },
    ];
  }
}
