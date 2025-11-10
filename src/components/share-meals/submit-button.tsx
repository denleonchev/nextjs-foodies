"use client";

import { useFormStatus } from "react-dom";

export default function MealSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="ml-auto p-2 rounded-lg bg-linear-to-r from-amber-700 to-amber-400"
      type="submit"
      disabled={pending}
    >
      {pending ? "Submitting" : "Share Meal"}
    </button>
  );
}
