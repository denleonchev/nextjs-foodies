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

type SaveMealPayloadSchemaType = z.infer<typeof saveMealPayloadSchema>;

type PrevStateType = {
  errors: z.ZodError<SaveMealPayloadSchemaType>["issues"];
  formData: FormData;
};

export async function createMealAction(
  prevState: PrevStateType,
  formData: FormData,
) {
  const createMealPayload = saveMealPayloadSchema.safeParse({
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    name: formData.get("name"),
    email: formData.get("email"),
  });

  if (!createMealPayload.success) {
    return {
      errors: createMealPayload.error.issues,
      formData,
    };
  }

  await saveMeal(createMealPayload.data);
  redirect("/meals");
}
