import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaClient } from "@prisma/client";
import ws from "ws";

// Enable WebSocket for Neon
neonConfig.webSocketConstructor = ws;

// Create a Neon connection pool
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });

export const prisma = new PrismaClient({
  datasourceUrl: connectionString, // ✅ Use datasourceUrl instead of adapter
}).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});
