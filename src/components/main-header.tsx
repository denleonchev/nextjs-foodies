"use client";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navAnchors = [
  {
    url: "/meals",
    text: "Browse Meals",
  },
  {
    url: "/community",
    text: "Foodies Community",
  },
] as const;

export const MainHeader = () => {
  const pathname = usePathname();
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
          {navAnchors.map((navAnchor) => {
            const isActive = navAnchor.url === pathname;
            const conditionalActiveClassnames = isActive
              ? "drop-shadow-red-900 drop-shadow-lg text-amber-500"
              : "";
            const conditionalHoverClassnames = !isActive
              ? "hover:underline"
              : "";

            return (
              <li key={navAnchor.url} className="mx-4">
                <Link
                  className={`${conditionalHoverClassnames} ${conditionalActiveClassnames}`}
                  href={navAnchor.url}
                >
                  {navAnchor.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
