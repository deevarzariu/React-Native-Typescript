import { useLayoutEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MealDetailsStackNavigatorParamsList } from "../navigation/navigator/MealDetailsStackNavigator";
import { MEALS } from "../data/data";
import MealDetails from "../components/MealDetails";
import List from "../components/MealDetails/List";
import Subtitle from "../components/MealDetails/Subtitle";
import IconButton from "../components/IconButton";

interface Props {
  navigation: NativeStackNavigationProp<
    MealDetailsStackNavigatorParamsList,
    "MealDetails"
  >;
  route: RouteProp<MealDetailsStackNavigatorParamsList, "MealDetails">;
}

function MealDetailsScreen({ navigation, route }: Props) {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerBtnPressHandler() {
    console.log("press");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton icon="star" color="white" onPress={headerBtnPressHandler} />
      ),
    });
  }, []);

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
