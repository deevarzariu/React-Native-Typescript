import { Alert, View, Image, Text, StyleSheet } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constants/Colors";
import OutlinedButton from "../UI/OutlinedButton";

interface ImagePickerProps {
  onPickImage: (image: string) => void;
}

function ImagePicker({ onPickImage }: ImagePickerProps) {
  const [cameraPermissions, requestPermission] = useCameraPermissions();
  const [image, setImage] = useState();

  async function verifyPermissions() {
    if (cameraPermissions?.status === PermissionStatus.UNDETERMINED) {
      const response = await requestPermission();
      return response.granted;
    }

    if (cameraPermissions?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );
      return false;
    }
    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;

    const photo = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setImage(photo["uri"]);
    onPickImage(photo["uri"]);
  }

  let imagePreview = <Text>No image taken yet.</Text>;

  if (image) {
    imagePreview = <Image source={{ uri: image }} style={styles.image} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton onPress={takeImageHandler} icon="camera">
        Take Image
      </OutlinedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImagePicker;
