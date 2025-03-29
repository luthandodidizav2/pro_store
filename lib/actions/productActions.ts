"use server";

import { PrismaClient } from "@prisma/client";
import { convertPrismaToObject } from "@/lib/utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { prisma } from "@/db/prisma";

// get latest products

export default async function getLatestProducts() {
  // const prisma = new PrismaClient();
  const products = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });
  return convertPrismaToObject(products);
}


//Get Single Product by its slug

export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({where:{slug:slug}})
}