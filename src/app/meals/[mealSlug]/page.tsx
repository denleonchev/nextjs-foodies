import Image from "next/image";
import { notFound } from "next/navigation";
import { getMeal } from "@/lib/meals";

export async function generateMetadata(props: PageProps<"/meals/[mealSlug]">) {
  const { mealSlug } = await props.params;
  const meal = await getMeal(mealSlug);

  return {
    title: meal?.title,
    description: meal?.summary,
  };
}

export default async function MealDetailsPage(
  props: PageProps<"/meals/[mealSlug]">,
) {
  const { mealSlug } = await props.params;
  const meal = await getMeal(mealSlug);

  if (!meal) {
    notFound();
  }

  const formattedInstructions = meal.instructions.replace(
    /(?<!^)\n/g,
    "<br />",
  );

  return (
    <>
      <header className="flex flex-col px-4 items-center md:px-8 mt-10 gap-10">
        <div className="relative md:w-1/2 grow-0 h-60">
          <Image
            className="rounded-xl object-cover"
            src={meal.image}
            alt={meal.title}
            fill
          />
        </div>
        <div className="py-5">
          <h1 className="text-6xl font-bold">{meal.title}</h1>
          <p className="mt-2.5 italic">
            by{" "}
            <a
              href={`mailto:${meal.creatorEmail}`}
              className="bg-linear-to-r from-amber-700 to-amber-400 bg-clip-text text-transparent"
            >
              {meal.creator}
            </a>
          </p>
          <p className="mt-2.5">{meal.summary}</p>
        </div>
      </header>
      <main className="mt-6 px-4 md:px-8">
        <p
          className="md:w-3/4 mx-auto p-4 bg-gray-500 rounded-2xl"
          dangerouslySetInnerHTML={{
            __html: formattedInstructions,
          }}
        ></p>
      </main>
    </>
  );
}
