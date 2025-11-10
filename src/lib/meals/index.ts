import sql from "better-sqlite3";
import { setTimeout } from "timers/promises";
import slugify from "slugify";
import xss from "xss";
import { MealDataType, MealViewType } from "@/lib/types";
import { getImageFileServePath, saveImageFile } from "./utils";

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

type SaveMealPayload = {
  title: string;
  summary: string;
  instructions: string;
  image: File;
  name: string;
  email: string;
};

export async function saveMeal(saveMealPayload: SaveMealPayload) {
  const slug = slugify(saveMealPayload.title);
  const instructions = xss(saveMealPayload.instructions);

  const extention = saveMealPayload.image.name.split(".").pop();
  const fileName = `${slug}.${extention}`;
  await saveImageFile(fileName, saveMealPayload.image);

  db.prepare(
    `
    INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES(
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `,
  ).run({
    title: saveMealPayload.title,
    summary: saveMealPayload.summary,
    instructions,
    creator: saveMealPayload.name,
    creator_email: saveMealPayload.email,
    image: getImageFileServePath(fileName),
    slug,
  });
}
