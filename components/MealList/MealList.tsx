import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Meal from "../../models/meal";
import MealListItem from "./MealListItem";

interface MealListProps {
  meals: Meal[];
}

function MealList({ meals }: MealListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
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

export default MealList;
