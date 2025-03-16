import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  mrp: z.number().positive(),
  saleRate: z.number().positive(),
  category: z.string().min(1, "Category is required"),
  subcategory: z.string().optional(),
  brand: z.string().min(1, "Brand is required"),
  description: z.string().min(10, "Description must be at least 10 characters long"),
  size: z.string().optional(),
  image: z.array(
    z.union([
      z.string().url("Image must be a valid URL"),
      z.instanceof(File, { message: "Must be a file" })
    ])
  ).min(1, "At least one image is required"),
  thumbnail: z.union([
    z.string().url("Thumbnail must be a valid URL"),
    z.instanceof(File, { message: "Thumbnail must be a file" })
  ])
});
