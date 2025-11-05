import { MealViewType } from "@/lib/types";
import { MealItem } from "./meal-item";

type MealsGridProps = {
  meals: MealViewType[];
};

export const MealsGrid = ({ meals }: MealsGridProps) => (
  <ul className="grid md:grid-cols-3 gap-5">
    {meals.map((meal) => (
      <li key={meal.id} className="flex items-stretch">
        <MealItem {...meal} />
      </li>
    ))}
  </ul>
);
