import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealListItem from "../components/MealListItem";
import { MEALS } from "../data/data";
import { MealsOverviewStackNavigatorParamsList } from "../navigation/navigator/MealsOverviewStackNavigator";

interface Props {
  navigation: NativeStackNavigationProp<
    MealsOverviewStackNavigatorParamsList,
    "MealsOverview"
  >;
  route: RouteProp<MealsOverviewStackNavigatorParamsList, "MealsOverview">;
}

function MealsOverviewScreen({ navigation, route }: Props) {
  const {
    params: { categoryId },
  }: { params: { categoryId: string } } = route;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={({ item }) => <MealListItem {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
