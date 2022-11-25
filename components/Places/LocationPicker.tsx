import { Alert, Image, StyleSheet, Text, View } from "react-native";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { Colors } from "../../constants/Colors";
import OutlinedButton from "../UI/OutlinedButton";
import { useState, useEffect } from "react";
import { getAddress, getMapPreviewUrl } from "../../utils/location";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { RootNavigationProp } from "../../navigation/navigator/Navigator";
import { Coordinates } from "../../models/Coordinates";

interface LocationPickerProps {
  onPickLocation: (location: Coordinates) => void;
}

function LocationPicker({ onPickLocation }: LocationPickerProps) {
  const [locationPermissions, requestPermission] = useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState<Coordinates>({
    lat: null,
    long: null,
  });
  const navigation = useNavigation<RootNavigationProp>();
  const route = useRoute();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      setPickedLocation(route.params as Coordinates);
      onPickLocation(route.params as Coordinates);
    }
  }, [route, isFocused]);

  useEffect(() => {
    async function handleLocation() {
      if (pickedLocation.lat && pickedLocation.long) {
        const address = await getAddress(pickedLocation);
        onPickLocation({ ...pickedLocation, address });
      }
    }
    handleLocation();
  }, [pickedLocation, onPickLocation]);

  async function verifyPermissions() {
    if (locationPermissions?.status === PermissionStatus.UNDETERMINED) {
      const response = await requestPermission();
      return response.granted;
    }

    if (locationPermissions?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );
      return false;
    }
    return true;
  }

  async function getUserLocationHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;

    const { coords } = await getCurrentPositionAsync();
    const { latitude: lat, longitude: long } = coords;
    setPickedLocation({ lat, long });
    onPickLocation({ lat, long });
  }

  function pickOnMapHandler() {
    navigation.navigate("Map");
  }

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation.lat && pickedLocation.long) {
    locationPreview = (
      <Image
        source={{
          uri: getMapPreviewUrl(pickedLocation),
        }}
        style={styles.image}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getUserLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
});

export default LocationPicker;
