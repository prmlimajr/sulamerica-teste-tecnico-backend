import "reflect-metadata";
import { AppError } from "@src/shared/errors/AppError";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import path from "path";

import "express-async-errors";

import "../database/seedDB";
import "../database";
import "@shared/container";

import { router } from "./routes";

const app = express();

app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));
app.use(cors());
app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      status: "Error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(8080, () => {
  console.log("Server is running");
});
