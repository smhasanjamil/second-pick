import { Request, Response } from "express";
import { userServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
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
    res.status(500).json({
      success: false,
      message: "Error creating user",
      error,
    });
  }
};

export const userControllers = {
  createUser,
};
