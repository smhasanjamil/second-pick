import { cookies } from "next/headers";
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



// export const getAllListing = async () => {
//   const token  = (await cookies()).get("accessToken")?.value;
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`);

    

//     return res.json();
//   } catch (error: any) {
//     return Error(error);
//   }
// };


export const getAllListing = async () => {

  const token  = (await cookies()).get("accessToken")?.value;

  if (!token) {
    throw new Error('Unauthorized: No token found');
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
      headers: {
        // Authorization: `Bearer ${token}`,
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch protected data');
    }

    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
