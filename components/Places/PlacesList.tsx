import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import Place from "../../models/Place";
import { RootNavigationProp } from "../../navigation/navigator/Navigator";
import PlacesListItem from "./PlacesListItem";

interface PlacesListProps {
  places?: Place[];
}

function PlacesList({ places }: PlacesListProps) {
  const navigation = useNavigation<RootNavigationProp>();

  function selectPlace(placeId: string) {
    navigation.navigate("PlaceDetails", { placeId });
  }

  if (!places || !places.length) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      renderItem={({ item }) => (
        <PlacesListItem
          place={item}
          onPress={selectPlace.bind(null, item.id.toString())}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});

export default PlacesList;
