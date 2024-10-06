import { db } from "../db";
import { InsertPlant, plantsTable } from "../schema";

export async function addPlant(plant: InsertPlant) {
  const newPlant = await db.insert(plantsTable).values(plant);
  return newPlant;
}
