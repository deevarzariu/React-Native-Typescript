import { useContext, useLayoutEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MealDetailsStackNavigatorParamsList } from "../navigation/navigator/MealDetailsStackNavigator";
import { MEALS } from "../data/data";
import MealDetails from "../components/MealDetails";
import List from "../components/MealDetails/List";
import Subtitle from "../components/MealDetails/Subtitle";
import IconButton from "../components/IconButton";
import { useSelector } from "react-redux";
import { AppState, useAppDispatch } from "../store/redux/store";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
// import { FavoritesContext } from "../store/context/favorites-context";

interface Props {
  navigation: NativeStackNavigationProp<
    MealDetailsStackNavigatorParamsList,
    "MealDetails"
  >;
  route: RouteProp<MealDetailsStackNavigatorParamsList, "MealDetails">;
}

function MealDetailsScreen({ navigation, route }: Props) {
  const { mealId } = route.params;
  const favorites = useSelector((state: AppState) => state.favorites.favorites);
  const dispatch = useAppDispatch();

  // const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const isInFavorites = favorites.some((id) => id === mealId);
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function toggleStatusHandler() {
    if (isInFavorites) {
      // removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={isInFavorites ? "star" : "star-outline"}
          color="white"
          onPress={toggleStatusHandler}
        />
      ),
    });
  }, [isInFavorites, toggleStatusHandler]);

  const {
    imageUrl = "",
    title = "",
    duration = 0,
    complexity = "",
    affordability = "",
    ingredients = [],
    steps = [],
  } = selectedMeal || {};

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.outerListContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List items={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List items={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  outerListContainer: {
    alignItems: "center",
  },
});

export default MealDetailsScreen;
