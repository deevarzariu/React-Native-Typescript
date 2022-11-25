import { useState, useCallback } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { Coordinates } from "../../models/Coordinates";
import Place from "../../models/Place";
import Button from "../UI/Button";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

interface PlaceFormProps {
  onSave: (place: any) => void;
}

function PlaceForm({ onSave }: PlaceFormProps) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState<Coordinates>({
    lat: null,
    long: null,
  });
  const [image, setImage] = useState("");

  function savePlaceHandler() {
    if (!location.address || !location.lat || !location.long) {
      return;
    }
    const place = new Place(0, title, image, location);
    onSave(place);
  }

  const pickLocationHandler = useCallback((location) => {
    setLocation(location);
  }, []);

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      </View>
      <ImagePicker onPickImage={setImage} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});

export default PlaceForm;
