import { Response } from "express";

const handlerZodError = (err: any, res: Response) => {
  const issues = err.issues.map((item: any) => {
    return {
      path: item.path.join(">"),
      message: item.message,
    };
  });

  res.status(400).json({
    success: false,
    message: err.message,
    issues: issues,
    error: err,
  });
};

export default handlerZodError;
