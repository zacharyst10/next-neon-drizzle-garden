import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import { config } from "dotenv";
config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in environment variables");
}

console.log(process.env.DATABASE_URL);

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql);
