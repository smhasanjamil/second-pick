import { Response } from "express";
import status from "http-status";

const handlerDuplicateError = (err: any, res: Response) => {
  res.status(status.CONFLICT).json({
    success: false,
    message: err.message,
    error: err,
  });
};

export default handlerDuplicateError;
