export default async function MealDetailsPage(
  props: PageProps<"/meals/[mealSlug]">,
) {
  const { mealSlug } = await props.params;
  return <h1>Meal {mealSlug} Page</h1>;
}
