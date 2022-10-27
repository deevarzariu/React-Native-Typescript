// import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/data";
import { AppState } from "../store/redux/store";
// import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
  // const { favorites } = useContext(FavoritesContext);
  const favorites = useSelector((state: AppState) => state.favorites.favorites);
  const meals = MEALS.filter((meal) => favorites.includes(meal.id));

  if (!meals.length) {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList meals={meals} />;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default FavoritesScreen;
