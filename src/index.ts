import express, { Request, Response, NextFunction } from "express";

import { ErrorHandler } from "./Error/ErrorHandler";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use(
  (err: ErrorHandler, request: Request, res: Response, next: NextFunction) => {
    if (err instanceof ErrorHandler) {
      return res.status(err.status).json({
        error: "error",
        description: err.message,
      });
    }

    return res.status(400).json({
      error: "error",
      description: "unknowed error",
    });
  }
);

export { app };
