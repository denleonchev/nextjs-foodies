"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({ url, text }: { url: string; text: string }) => {
  const pathname = usePathname();
  const isActive = url === pathname;
  const conditionalActiveClassnames = isActive
    ? "drop-shadow-red-900 drop-shadow-lg text-amber-500"
    : "";
  const conditionalHoverClassnames = !isActive ? "hover:underline" : "";

  return (
    <Link
      className={`${conditionalHoverClassnames} ${conditionalActiveClassnames}`}
      href={url}
    >
      {text}
    </Link>
  );
};
