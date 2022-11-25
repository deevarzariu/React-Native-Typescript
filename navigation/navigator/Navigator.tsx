import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IconButton from "../../components/UI/IconButton";
import { Colors } from "../../constants/Colors";
import { Coordinates } from "../../models/Coordinates";
import AddPlace from "../../screens/AddPlace";
import AllPlaces from "../../screens/AllPlaces";
import Map from "../../screens/Map";
import PlaceDetails from "../../screens/PlaceDetails";

export type RootStackParamsList = {
  AllPlaces: undefined;
  AddPlace: Coordinates | undefined;
  Map: Coordinates | undefined;
  PlaceDetails: { placeId: string };
};

export type RootNavigationProp = NavigationProp<RootStackParamsList>;

const Stack = createNativeStackNavigator<RootStackParamsList>();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary500,
          },
          headerTintColor: Colors.gray700,
          contentStyle: {
            backgroundColor: Colors.gray700,
          },
        }}
      >
        <Stack.Screen
          name="AllPlaces"
          component={AllPlaces}
          options={({ navigation }) => ({
            title: "Your Favorite Places",
            headerRight: ({ tintColor }) => (
              <IconButton
                icon="add"
                color={tintColor}
                size={24}
                onPress={() => {
                  navigation.navigate("AddPlace");
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AddPlace"
          component={AddPlace}
          options={{ title: "Add New Place" }}
        />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen
          name="PlaceDetails"
          component={PlaceDetails}
          options={{ title: "Loading Place..." }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
