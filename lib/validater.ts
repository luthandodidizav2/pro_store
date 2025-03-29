import { z } from "zod";
import { formatNumberDecimal } from "./utils";

// Schema for inserting products

export const currency = z.string().refine(val=> /^\d+(\.\d{2})?$/.test(formatNumberDecimal(Number(val))),"Price Must Have 2 decimal places")

export const insertProductSchema = z.object({
  name: z.string().min(1, "Product Name Must Be At least 3 chars").max(255),
  slug: z.string().min(1, "Product Slug Must Be At least 3 chars").max(255),
  description: z.string().min(1, "Product Description Must Be At least 3 chars").max(255),
  brand: z.string().min(1, "Product Brand Must Be At least 3 chars").max(255),
  category: z.string().min(1, "Product Category Must Be At least 3 chars").max(255),
  stock:z.coerce.number(),
  images: z.array(z.string()).min(1,"Images must be atleast 1"),
  banner:z.string().nullable(),
  isFeatured:z.boolean(),
  price:currency
  
  

});
