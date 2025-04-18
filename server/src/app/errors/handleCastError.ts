import { Response } from "express";

const handleCastError = (err: any, res: Response) => {
  res.status(400).json({
    success: false,
    message: err.message,
    error: err,
  });
};

export default handleCastError;
