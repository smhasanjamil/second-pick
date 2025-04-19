import { TListing } from "./listing.interface";
import { ListingModel } from "./listing.model";

// Create User
const createListingIntoDB = async (listing: TListing) => {
  const result = await ListingModel.create(listing);
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
