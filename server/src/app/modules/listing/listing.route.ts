import { Router } from "express";
import { listingValidations } from "./listing.validation";
import { listingControllers } from "./listing.controller";
import validateRequest from "../../middleware/validateRequest";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../auth/auth.constant";

const router = Router();

router.get("/", auth(USER_ROLE.admin), listingControllers.getAllListing);

router.post(
  "/",
  validateRequest(listingValidations.listingValidationSchema),
  listingControllers.createListing
);

export const ListingRoutes = router;
