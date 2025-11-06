import Link from "next/link";
import { MealsLoading } from "./meals-loading";
import { Suspense } from "react";
import { Meals } from "./meals";

export default async function MealsPage() {
  return (
    <>
      <header className="px-4 md:px-8">
        <h1 className=" font-extrabold text-4xl">
          Delicious meals, createed{" "}
          <span className="bg-linear-to-r from-amber-700 to-amber-400 bg-clip-text text-transparent">
            by you
          </span>
        </h1>
        <p className="mt-5 text-lg">
          Choose your favorite recipe and cook it by yourself It is easy and fun
        </p>
        <p className="mt-3">
          <Link
            className="inline-block p-2 rounded-lg bg-linear-to-r from-amber-700 to-amber-400"
            href="/meals/share"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <Suspense fallback={<MealsLoading />}>
        <Meals />
      </Suspense>
    </>
  );
}
