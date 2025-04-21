import { Router } from "express";
import { listingValidations } from "./listing.validation";
import { listingControllers } from "./listing.controller";
import validateRequest from "../../middleware/validateRequest";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../auth/auth.constant";
import { parseFormData } from "../../middleware/parseFormData";
import { upload } from "../../utils/sendImageToCloudinary";

const router = Router();

router.get("/", 
  auth(USER_ROLE.admin, USER_ROLE.user), 
  listingControllers.getAllListing);

// router.post(
//   "/",
//   validateRequest(listingValidations.listingValidationSchema),
//   listingControllers.createListing
// );

// Route to create a listing with image upload (if applicable)
router.post(
  "/",
  upload.array("images", 5),  // Handle up to 5 images
  parseFormData,
  validateRequest(listingValidations.listingValidationSchema),  
  listingControllers.createListing
);

export const ListingRoutes = router;
