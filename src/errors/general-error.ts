export abstract class GeneralError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, GeneralError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
