export class CustomError extends Error {
  constructor(public statusCode: number, public message: string) {
    super();
    this.message = message;
    this.statusCode = statusCode || 500;
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  //   getStatusCode() {
  //     return this.statusCode;
  //   }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
