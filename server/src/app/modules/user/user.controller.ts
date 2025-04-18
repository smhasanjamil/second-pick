import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body;
    const result = await userServices.createUserIntoDB(user);

    //   send response
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userControllers = {
  createUser,
};
