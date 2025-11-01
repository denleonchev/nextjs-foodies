import { ImageSlideshow } from "@/components/image-slideshow";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex flex-col md:flex-row gap-6 my-10 px-4 md:px-8">
        <div className="md:w-1/2 h-50">
          <ImageSlideshow />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <h1 className="bg-linear-to-r from-amber-900 to-amber-500 bg-clip-text text-transparent text-3xl font-extrabold text-center">
            NextLevel Food for NextLevel Foodies
          </h1>
          <p className="mt-4">Taste & share food from all over the world</p>
          <div className="flex space-x-3 mt-4">
            <Link
              className="p-2 text-amber-600 hover:underline"
              href="/community"
            >
              Join the Community
            </Link>
            <Link
              className="p-2 rounded-xl font-bold bg-linear-to-r from-amber-700 to-amber-400 hover:opacity-50 duration-200"
              href="/meals"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main className="mt-10  px-4 md:px-8">
        <section>
          <h2 className="my-6 font-extrabold text-center">How it works</h2>
          <p className="my-4 text-center">
            NextLevel Food is a platform for foodies to share their favorite
            recepes with the world. It is a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p className="my-4 text-center">
            NextLevel Food is a place to discover new dishes, and to conect with
            other food lovers.
          </p>
        </section>
        <section>
          <h2 className="my-6 font-extrabold text-center">
            Why NextLevel Food?
          </h2>
          <p className="my-4 text-center">
            NextLevel Food is a platform for foodies to share their favorite
            recepes with the world. It is a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p className="my-4 text-center">
            NextLevel Food is a place to discover new dishes, and to conect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
