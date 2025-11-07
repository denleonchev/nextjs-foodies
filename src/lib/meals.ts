import sql from "better-sqlite3";
import { setTimeout } from "timers/promises";
import { MealDataType, MealViewType } from "@/lib/types";

const db = sql("meals.db");

function mapMealDataToView(mealData: MealDataType) {
  return {
    id: mealData.id,
    title: mealData.title,
    creator: mealData.creator,
    summary: mealData.summary,
    slug: mealData.slug,
    image: mealData.image,
    instructions: mealData.instructions,
    creatorEmail: mealData.creator_email,
  };
}

function mapMealsDataToView(mealsData: MealDataType[]) {
  return mealsData.map(mapMealDataToView);
}

export async function getMeals(): Promise<MealViewType[]> {
  await setTimeout(2000);
  const mealsData = db.prepare("SELECT * from meals").all() as MealDataType[];
  // throw new Error("Problems, sir!");
  return mapMealsDataToView(mealsData);
}

export async function getMeal(slug: string): Promise<MealViewType | null> {
  await setTimeout(2000);
  const mealData = db
    .prepare("SELECT * from meals where slug = ?")
    .get(slug) as unknown as MealDataType | null;
  // throw new Error("Problems, sir!");
  if (!mealData) {
    return mealData;
  }

  return mapMealDataToView(mealData);
}
