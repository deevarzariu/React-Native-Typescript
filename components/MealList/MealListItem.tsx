import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MealDetailsStackNavigatorParamsList } from "../../navigation/navigator/MealDetailsStackNavigator";
import MealDetails from "../MealDetails";

interface MealListItemProps {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
}

function MealListItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: MealListItemProps) {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<
        MealDetailsStackNavigatorParamsList,
        "MealDetails"
      >
    >();

  function pressHandler() {
    navigation.navigate("MealDetails", { mealId: id });
  }

  return (
    <View style={styles.mealItemContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed && styles.buttonPressed}
        onPress={pressHandler}
      >
        <View style={styles.mealItem}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItemContainer: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 16,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  mealItem: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    margin: 8,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});

export default MealListItem;
