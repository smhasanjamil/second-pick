import status from "http-status";
import bcrypt from "bcrypt";
import AppError from "../../errors/AppError";
import { UserModel } from "../user/user.model";
import { IJwtPayload, TAuth } from "./auth.interface";

import jwt from "jsonwebtoken";
import config from "../../config";

const loginUser = async (payload: TAuth) => {
  const user = await UserModel.findOne({ email: payload?.email });

  if (!user) {
    throw new AppError(status.NOT_FOUND, "This user is not found!");
  }
  if (!user?.isActive) {
    throw new AppError(status.FORBIDDEN, "User is not active!");
  }

  if (!(await bcrypt.compare(payload?.password, user?.password))) {
    throw new AppError(status.UNAUTHORIZED, "Invalid password!");
  }

  const jwtPayload: IJwtPayload = {
    id: user?._id?.toString(),
    name: user?.name as string,
    email: user?.email as string,
    phoneNumber: user?.phoneNumber as string,
    role: user?.role,
    isActive: user?.isActive,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: "1d",
  });

  return { accessToken };
};

export const AuthService = {
  loginUser,
};
