import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import config from "../config";
import { Readable } from "stream";

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: config.cloudinary_cloud_name,
  api_key: config.cloudinary_api_key,
  api_secret: config.cloudinary_api_secret,
});

// Multer setup for in-memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Helper function to upload a file to Cloudinary
const uploadToCloudinary = (file: Express.Multer.File) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "listings", // Cloudinary folder to save the image
        public_id: `${Date.now()}-${file.originalname.replace(/\s+/g, "-")}`,
      },
      (error, result) => {
        if (error) reject(error);
        resolve(result);
      }
    );

    const bufferStream = new Readable();
    bufferStream.push(file.buffer);
    bufferStream.push(null); // End the stream
    bufferStream.pipe(stream);
  });
};

// Function to handle single or multiple file uploads to Cloudinary
export const sendImageToCloudinary = async (
  files: Express.Multer.File | Express.Multer.File[]
) => {
  const fileArray = Array.isArray(files) ? files : [files];

  try {
    const uploadPromises = fileArray.map(uploadToCloudinary);
    const uploadResults = await Promise.all(uploadPromises);
    return uploadResults.map((result: any) => result.secure_url); // Return secure URLs of uploaded images
  } catch (error) {
    throw new Error("Error uploading files to Cloudinary: " + error);
  }
};

export { upload }; // Export the multer upload for use in routes
