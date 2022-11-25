import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../constants/Colors";
import Place from "../models/Place";
import { fetchPlace } from "../utils/database";

function PlaceDetails({ route, navigation }) {
  const [place, setPlace] = useState<Place>();

  useEffect(() => {
    const { placeId } = route.params;
    fetchPlace(placeId).then((result: Place) => {
      setPlace(result);
      navigation.setOptions({ title: result.title });
    });
  }, [route.params]);

  function showOnMapHandler() {
    navigation.navigate("Map", {
      lat: place?.location.lat,
      long: place?.location.long,
    });
  }

  if (!place) {
    return (
      <View style={styles.fallback}>
        <Text style={styles.fallbackText}>Loading place data...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Image source={{ uri: place?.imageUri }} style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place?.location.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    color: Colors.primary500,
    fontSize: 16,
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default PlaceDetails;
