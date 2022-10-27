import { useContext } from "react";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/data";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
  const { favorites } = useContext(FavoritesContext);
  const meals = MEALS.filter((meal) => favorites.includes(meal.id));
  return <MealList meals={meals} />;
}

export default FavoritesScreen;
