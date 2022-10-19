import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList, View } from "react-native";
import CategoryListItem from "../components/CategoryListItem";
import { CATEGORIES } from "../data/data";
import { CategoriesStackNavigatorParamsList } from "../navigation/navigator/CategoriesStackNavigator";

interface Props {
  navigation: NativeStackNavigationProp<
    CategoriesStackNavigatorParamsList,
    "Categories"
  >;
}

function CategoryScreen({ navigation }: Props) {
  function pressHandler(categoryId: string) {
    navigation.navigate("MealsOverview", { categoryId });
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item: { title, color, id } }) => (
          <CategoryListItem
            title={title}
            color={color}
            id={id}
            onPress={pressHandler}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

export default CategoryScreen;
