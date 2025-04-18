import { z } from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(1, "Name is required"),

    email: z
      .string({
        required_error: "Email is required",
      })
      .email("Invalid email format"),

    phoneNumber: z
      .string({
        required_error: "Phone number is required",
      })
      .min(10, "Phone number must be at least 10 digits")
      .max(14, "Phone number must be at most 14 digits"),

    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6, "Password must be at least 6 characters long"),

    role: z.enum(["user", "admin"]).optional().default("user"), // Optional with default
  }),
});

export const userValidations = {
  createUserValidationSchema,
};
