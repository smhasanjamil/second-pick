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

export const AuthRoutes = router;
