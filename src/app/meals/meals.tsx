import { MealsGrid } from "@/components/meals-grid";
import { getMeals } from "@/lib/meals";

export async function Meals() {
  const meals = await getMeals();

  return (
    <main className="p-4 md:p-8">
      <MealsGrid meals={meals} />
    </main>
  );
}
