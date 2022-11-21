import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Place from "../../models/Place";

interface PlacesListItemProps {
  place: Place;
  onPress?: () => void;
}

function PlacesListItem({
  place: { title, imageUri, address },
  onPress,
}: PlacesListItemProps) {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Image source={{ uri: imageUri }} />
        <View>
          <Text>{title}</Text>
          <Text>{address}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});

export default PlacesListItem;
