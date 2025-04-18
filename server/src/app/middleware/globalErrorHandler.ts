import { ErrorRequestHandler } from "express";
import handleGenericError from "../errors/handleGenericError";
import handlerDuplicateError from "../errors/handleDuplicateError";
import mongoose from "mongoose";
import handleCastError from "../errors/handleCastError";
import handleValidationError from "../errors/handlerValidationError";
import handlerZodError from "../errors/handleZodError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err.name && err.name === "ZodError") {
    handlerZodError(err, res);
  } else if (err instanceof mongoose.Error.CastError) {
    handleCastError(err, res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    handleValidationError(err, res);
  } else if (err.code && err.code === 11000) {
    handlerDuplicateError(err, res);
  } else if (err instanceof Error) {
    handleGenericError(err, res);
  }
};

export default globalErrorHandler;
