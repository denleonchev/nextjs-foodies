import { MealViewType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export type MealItemProps = MealViewType;

export const MealItem = ({
  title,
  creator,
  summary,
  slug,
  image,
}: MealItemProps) => (
  <article className="flex flex-col flex-1 bg-amber-950 rounded-2xl">
    <header>
      <Image
        className="max-w-full w-full h-[150px] rounded-t-2xl object-cover"
        width={100}
        height={100}
        src={image}
        alt={title}
      />
      <div className="p-2">
        <h2 className="font-bold">{title}</h2>
        <p className="mt-2">by {creator}</p>
      </div>
    </header>
    <section className="flex flex-col flex-1 p-2">
      <p>{summary}</p>
      <div className="flex justify-end items-end flex-1 mt-2">
        <Link
          className="p-2 rounded-lg bg-linear-to-r from-amber-700 to-amber-400"
          href={`/meals/${slug}`}
        >
          View Details
        </Link>
      </div>
    </section>
  </article>
);
