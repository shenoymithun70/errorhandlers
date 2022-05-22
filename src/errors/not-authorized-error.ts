import { GeneralError } from "./general-error";

export class NotAuthorizedError extends GeneralError {
  statusCode = 401;

  constructor() {
    super("Not authorized");

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: "Not authorized",
      },
    ];
  }
}
