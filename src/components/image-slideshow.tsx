"use client";

import { useEffect, useState } from "react";
import tomatoSaladImg from "@/assets/images/tomato-salad.jpg";
import burgerImg from "@/assets/images/burger.jpg";
import curryImg from "@/assets/images/curry.jpg";
import dumplingsImg from "@/assets/images/dumplings.jpg";
import macAndCheeseImg from "@/assets/images/macncheese.jpg";
import pizzaImg from "@/assets/images/pizza.jpg";
import schnitzelImg from "@/assets/images/schnitzel.jpg";
import Image from "next/image";

const images = [
  {
    image: tomatoSaladImg,
    alt: "A delicious tomato salad",
  },
  {
    image: burgerImg,
    alt: "A delicious burger",
  },
  {
    image: curryImg,
    alt: "A delicious curry",
  },
  {
    image: dumplingsImg,
    alt: "Steamed dumplings",
  },
  {
    image: macAndCheeseImg,
    alt: "Mac and cheese",
  },
  {
    image: pizzaImg,
    alt: "A delicious pizza",
  },
  {
    image: schnitzelImg,
    alt: "A delicious schnitzel",
  },
];

export const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevImageIndex) =>
        prevImageIndex + 1 < images.length ? prevImageIndex + 1 : 0,
      );
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-lg">
      {images.map((image, index) => {
        const isImageActive = index === currentImageIndex;
        const activeClassNames = isImageActive
          ? "opacity-100 translate-0 -rotate-0 "
          : "";
        return (
          <Image
            className={`absolute top-0 left-0 z-10 w-full h-full object-cover scale-110 -translate-1 -rotate-6 opacity-0 ease-in-out duration-500 ${activeClassNames}`}
            key={index}
            src={image.image}
            alt={image.alt}
          />
        );
      })}
    </div>
  );
};
