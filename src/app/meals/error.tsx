"use client";

export default function MealsErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <main className="px-4 md:px-8">
      <h1 className="mt-4 text-5xl uppercase text-center bg-linear-to-r from-amber-700 to-amber-400 bg-clip-text text-transparent">
        An error occured!
      </h1>
      <p className="mt-2 text-center">{error.message}</p>
      <p className="mt-2 text-center">Please try again later</p>
    </main>
  );
}
