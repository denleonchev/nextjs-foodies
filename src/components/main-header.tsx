import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";

export const MainHeader = () => {
  return (
    <header className="flex flex-col md:flex-row md:justify-between px-4 md:px-8 font-bold">
      <Link
        className="flex items-center self-center my-2 hover:drop-shadow-amber-900 hover:drop-shadow-xl hover:text-amber-500 duration-200"
        href="/"
      >
        <Image
          width="40"
          height="40"
          src={logoImg}
          alt="A plate with food on it"
          priority
        />
        <span className="mx-2">NEXTLEVEL FOOD</span>
      </Link>
      <nav className="self-center my-2">
        <ul className="flex">
          <li className="mx-4">
            <Link
              className="hover:drop-shadow-amber-900 hover:drop-shadow-xl hover:text-amber-500 duration-200"
              href="/meals"
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              className="hover:drop-shadow-amber-900 hover:drop-shadow-xl hover:text-amber-500 duration-200"
              href="/community"
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
