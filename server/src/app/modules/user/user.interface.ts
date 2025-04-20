import { USER_ROLE } from "../auth/auth.constant";

export type TUser = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  role?: "user" | "admin";
  isActive?: boolean;
};


export type TUserRole = keyof typeof USER_ROLE;
