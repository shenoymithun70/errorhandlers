import express from "express";
import { errorHandler } from "./middlewares/error-handler";
import { CustomError } from "./errors/custom-error";
import { BadRequestError } from "./errors/bad-request-error";
import { DatabaseConnectionError } from "./errors/database-connection-error";

const app = express();

app.get(
  "/testuser",

  // checkInternalAPI,
  (req, res, next) => {
    return next(new DatabaseConnectionError());
  }
);

app.use(errorHandler);

app.listen(8002, () => {
  console.log("server started on port 8002");
});
