import { Types } from "mongoose";

export type TListing = {
  title: string;
  description: string;
  condition: "new" | "like-new" | "used";
  price: number;
  location: {
    city: string;
    country: string;
  };
  category: 'Electronics' | 'Furniture' | 'Clothing' | 'Books' | 'Home Appliances';
  images?: string[];
  userId: Types.ObjectId;
  status: "available" | "sold";
};
