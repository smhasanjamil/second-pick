import { z } from "zod";

export const createListingSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  condition: z.enum(["new", "like-new", "used"], {
    message: "Condition is required",
  }),
  price: z.number().min(0, "Price must be a positive number"),
  location: z.object({
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
  }),
  category: z.enum(
    ["Electronics", "Furniture", "Clothing", "Books", "Home Appliances"],
    { message: "Category is required" }
  ),
  images: z
    .array(z.string().url(), { message: "Images must be valid URLs" })
    .min(1, { message: "At least one image is required" }),

//   userId: z.string().min(1, "User ID is required"),
});
