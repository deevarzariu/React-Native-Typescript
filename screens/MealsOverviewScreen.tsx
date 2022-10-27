import { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { MEALS, CATEGORIES } from "../data/data";
import { MealsOverviewStackNavigatorParamsList } from "../navigation/navigator/MealsOverviewStackNavigator";
import MealListItem from "../components/MealList/MealListItem";
import MealList from "../components/MealList/MealList";

interface Props {
  navigation: NativeStackNavigationProp<
    MealsOverviewStackNavigatorParamsList,
    "MealsOverview"
  >;
  route: RouteProp<MealsOverviewStackNavigatorParamsList, "MealsOverview">;
}

function MealsOverviewScreen({ route, navigation }: Props) {
  const {
    params: { categoryId },
  }: { params: { categoryId: string } } = route;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const { title: categoryTitle } =
      CATEGORIES.find((category) => category.id === categoryId) || {};

    navigation.setOptions({
      headerTitle: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealList meals={displayedMeals} />;
}

export default MealsOverviewScreen;
