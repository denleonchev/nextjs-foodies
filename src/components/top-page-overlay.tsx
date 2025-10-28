import Image from "next/image";
import overlayImg from "@/assets/overlay.svg";
export const TopPageOverlay = () => {
  return (
    <div className="relative">
      <Image
        className="absolute left-0 top-0 -z-10 w-full drop-shadow-lg drop-shadow-amber-900"
        src={overlayImg}
        alt="overlay"
        priority
      />
    </div>
  );
};
