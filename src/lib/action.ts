"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { saveMeal } from "./meals";

const nonemptyString = z
  .string()
  .transform((t) => t?.trim())
  .pipe(z.string().min(1));

const nonemptyFile = z.instanceof(File).refine((file: File) => file.size > 0, {
  message: "The file is empty",
});

const saveMealPayloadSchema = z.object({
  title: nonemptyString,
  summary: nonemptyString,
  instructions: nonemptyString,
  image: nonemptyFile,
  name: nonemptyString,
  email: nonemptyString,
});

export async function createMealAction(formData: FormData) {
  const file = formData.get("image");
  const createMealPayload = saveMealPayloadSchema.parse({
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    name: formData.get("name"),
    email: formData.get("email"),
  });

  await saveMeal(createMealPayload);
  redirect("/meals");
}
