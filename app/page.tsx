import AddPlantForm from "@/components/add-plant";
import { neon } from "@neondatabase/serverless";

export default async function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-primary">Garden Site</h1>
      <AddPlantForm />
    </div>
  );
}
