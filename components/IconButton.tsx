import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IconButtonProps {
  icon: string;
  color?: string;
  onPress: () => void;
}

function IconButton({ icon, color, onPress }: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon as any} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});

export default IconButton;
