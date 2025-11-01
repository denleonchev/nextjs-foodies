import Image from "next/image";
import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

export default function CommunityPage() {
  return (
    <>
      <header className="mt-20">
        <h1 className="text-center font-extrabold text-4xl">
          One shared passion:{" "}
          <span className="bg-linear-to-r frombg-linear-to-r from-amber-700 to-amber-400 bg-clip-text text-transparent">
            Food
          </span>
        </h1>
        <p className="mt-5 text-center text-lg">
          Join our community and share your favorite recipes!
        </p>
      </header>
      <main className="mt-8">
        <h2 className="text-center text-2xl font-bold">Community Perks</h2>

        <ul className="mt-4">
          <li className="flex flex-col items-center">
            <Image className="size-20" src={mealIcon} alt="A delicious meal" />
            <p className="mt-3 font-bold">Share & discover recipes</p>
          </li>
          <li className="flex flex-col items-center mt-3">
            <Image
              className="size-20"
              src={communityIcon}
              alt="A crowd of people, cooking"
            />
            <p className="mt-3 font-bold">
              Find new friends & like-minded people
            </p>
          </li>
          <li className="flex flex-col items-center mt-3">
            <Image
              className="size-20"
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p className="mt-3 font-bold">Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
