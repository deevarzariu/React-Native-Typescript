import { useState, useCallback, useLayoutEffect } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";
import { Coordinates } from "../models/Coordinates";

function Map({ navigation, route }) {
  const [location, setLocation] = useState<Coordinates>({
    lat: route.params ? route.params.lat : null,
    long: route.params ? route.params.long : null,
  });

  const region = {
    latitude: location.lat || 48.21,
    longitude: location.long || 16.36,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const saveLocationHandler = useCallback(() => {
    if (!location.lat || !location.long) {
      Alert.alert(
        "No location picked!",
        "You have to pick a location. Please tap on the map."
      );
      return;
    }
    navigation.navigate("AddPlace", location);
  }, [navigation, location]);

  useLayoutEffect(() => {
    if (route.params) return;

    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          color={tintColor}
          size={24}
          onPress={saveLocationHandler}
        />
      ),
    });
  }, [navigation, saveLocationHandler]);

  function selectLocation(event) {
    if (route.params) return;
    const { latitude: lat, longitude: long } = event.nativeEvent.coordinate;
    setLocation({ lat, long });
  }

  return (
    <MapView initialRegion={region} style={styles.map} onPress={selectLocation}>
      <Marker
        coordinate={{
          latitude: location.lat || region.latitude,
          longitude: location.long || region.longitude,
        }}
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default Map;
