import { model, Schema } from "mongoose";
import { TListing } from "./listing.interface";

const listingSchema = new Schema<TListing>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      enum: ["new", "like-new", "used"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      city: {
        type: String,
        required: true,
        trim: true,
      },
      country: {
        type: String,
        required: true,
        trim: true,
      },
    },
    category: {
      type: String,
      enum: [
        "Electronics",
        "Furniture",
        "Clothing",
        "Books",
        "Home Appliances",
      ],
      required: true,
      trim: true,
    },
    images: {
      type: [String],
      required: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["available", "sold"],
      default: "available",
    },
  },
  {
    timestamps: true,
  }
);

export const ListingModel = model<TListing>("Listing", listingSchema);
