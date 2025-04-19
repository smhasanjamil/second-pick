import { Router } from "express";
import { listingValidations } from "./listing.validation";
import { listingControllers } from "./listing.controller";
import validateRequest from "../../middleware/validateRequest";

const router = Router();

router.get("/", listingControllers.getAllListing);

router.post(
  "/",
  validateRequest(listingValidations.listingValidationSchema),
  listingControllers.createListing
);

export const ListingRoutes = router;
