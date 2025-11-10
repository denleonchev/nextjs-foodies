import ImagePicker from "@/components/share-meals/image-picker";
import MealSubmitButton from "@/components/share-meals/submit-button";
import { createMealAction } from "@/lib/action";

export default function ShareMealPage() {
  return (
    <>
      <header className="p-4 md:p-8">
        <h1 className="font-extrabold text-4xl">
          Share your{" "}
          <span className="bg-linear-to-r frombg-linear-to-r from-amber-700 to-amber-400 bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p className="mt-5">Or any other meal you feel needs sharing!</p>
      </header>
      <main className="p-4 md:p-8">
        <form
          className="md:max-w-3/4 flex flex-col gap-3"
          action={createMealAction}
        >
          <div className="flex flex-row gap-4">
            <p className="flex flex-col flex-1 gap-1">
              <label htmlFor="name">Your name</label>
              <input
                className="flex-1 bg-gray-800 border-2 border-gray-500 rounded-sm"
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
            <p className="flex flex-col flex-1 gap-1">
              <label htmlFor="email">Your email</label>
              <input
                className="flex-1 bg-gray-800 border-2 border-gray-500 rounded-sm"
                type="email"
                id="email"
                name="email"
                required
              />
            </p>
          </div>
          <p className="flex flex-col flex-1 gap-1">
            <label htmlFor="title">Title</label>
            <input
              className="flex-1 bg-gray-800 border-2 border-gray-500 rounded-sm"
              type="text"
              id="title"
              name="title"
              required
            />
          </p>
          <p className="flex flex-col flex-1 gap-1">
            <label htmlFor="summary">Short Summary</label>
            <input
              className="flex-1 bg-gray-800 border-2 border-gray-500 rounded-sm"
              type="text"
              id="summary"
              name="summary"
              required
            />
          </p>
          <p className="flex flex-col flex-1 gap-1">
            <label htmlFor="instructions">Instructions</label>
            <textarea
              className="flex-1 bg-gray-800 border-2 border-gray-500 rounded-sm"
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <div className="flex flex-col flex-1 gap-1">
            <ImagePicker name="image" label="Image" />
          </div>
          <p className="flex mt-2">
            <MealSubmitButton />
          </p>
        </form>
      </main>
    </>
  );
}
