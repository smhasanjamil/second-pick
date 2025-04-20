import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { AuthValidation } from "./auth.validation";
import { authControllers } from "./auth.controller";

const router = Router();

router.post(
  "/login",
  validateRequest(AuthValidation.loginZodSchema),
  authControllers.loginUser
);

router.post(
  "/refresh-token",
  validateRequest(AuthValidation.refreshTokenZodSchema),
  authControllers.refreshToken
);

export const AuthRoutes = router;
