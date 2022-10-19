import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

interface CategoryListItemProps {
  title: string;
  color: string;
  id: string;
  onPress: (id: string) => void;
}

function CategoryListItem({
  title,
  color,
  id,
  onPress,
}: CategoryListItemProps) {
  const categoryItemStyle = { backgroundColor: color };

  return (
    <View style={[styles.listItemContainer, categoryItemStyle]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.buttonPressed] : styles.button
        }
        onPress={() => onPress(id)}
      >
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  listItem: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  listItemText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryListItem;
