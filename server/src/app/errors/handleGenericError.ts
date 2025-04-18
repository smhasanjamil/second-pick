import { Response } from "express";
import status from "http-status";

const handleGenericError = (err: any, res: Response) => {
  res.status(status.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message,
    error: err,
  });
};

export default handleGenericError;
