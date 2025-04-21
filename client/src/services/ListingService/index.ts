import { FieldValues } from "react-hook-form";

export const createListing = async (userData: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    const result = await res.json();

   

    return result;
  } catch (error: any) {
    return Error(error);
  }
};