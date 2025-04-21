import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import { TListing } from "./listing.interface";
import { ListingModel } from "./listing.model";

// Create User
// const createListingIntoDB = async (listing: TListing) => {
//   const result = await ListingModel.create(listing);
//   return result;
// };
const createListingIntoDB = async (data: TListing, files: Express.Multer.File[]) => {
  let imageUrls = [];
  if (files && files.length > 0) {
    imageUrls = await sendImageToCloudinary(files);  // Handle file upload to Cloudinary
  }

  const payload = {
    ...data,
    images: imageUrls.length > 0 ? imageUrls : data.images || [],  // Attach image URLs or use existing images
  };

  const result = await ListingModel.create(payload);  // Save listing in DB
  return result;
};

const getAllListingFromDB = async (query: Record<string, unknown>) => {
  const result = await ListingModel.find();
  return result;
};

export const listingServices = {
  createListingIntoDB,
  getAllListingFromDB,
};
