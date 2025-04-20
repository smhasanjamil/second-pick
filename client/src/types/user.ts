export interface IUser {
    id: string;
    name: string;
    email: string;
    isActive?: boolean;
    role: "user" | "admin";
    phoneNumber: string;
    iat?: number;
    exp?: number;
  }