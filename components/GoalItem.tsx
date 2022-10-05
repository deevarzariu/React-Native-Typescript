import { Pressable, StyleSheet, Text, View } from "react-native";

interface GoalItemProps {
  text: string;
  id: string;
  onDeleteItem: (id: string) => void;
}

function GoalItem({ text, id, onDeleteItem }: GoalItemProps) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDeleteItem(id)}
        android_ripple={{ color: "#dddddd" }}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});

export default GoalItem;
