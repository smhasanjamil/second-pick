import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { listingServices } from "./listing.service";

const createListing = catchAsync(async (req, res) => {
  // const listing = req.body;
  // const result = await listingServices.createListingIntoDB(listing);
  const { body, files } = req;  // Destructure body and files from the request
  const validFiles = Array.isArray(files) ? files : files?.["images"] || [];  // Handles single or multiple files

  const result = await listingServices.createListingIntoDB(body, validFiles);  // Delegate to service layer

  //   send response
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Listing created successfully",
    data: result,
  });
});

const getAllListing = catchAsync(async (req, res) => {
  // console.log('testing', req.user);
  // console.log(req.cookies);

  const result = await listingServices.getAllListingFromDB(req.query);

  //   send response
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Listing are retrieved successfully",
    data: result,
  });
});

export const listingControllers = {
  createListing,
  getAllListing,
};
