import { z } from "zod";

const userSchemaValidation = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(14, "Phone number must be at most 14 digits"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["user", "admin"]).optional().default("user"),
});

export const userValidation = {
  userSchemaValidation,
};
