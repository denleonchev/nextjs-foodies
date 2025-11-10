"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function createMealAction(formData: FormData) {
  const createMealPayload = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    name: formData.get("name") as string,
    email: formData.get("email") as string,
  };

  await saveMeal(createMealPayload);
  redirect("/meals");
}
