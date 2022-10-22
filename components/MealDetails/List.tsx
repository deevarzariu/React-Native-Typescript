import { View, Text, StyleSheet } from "react-native";

interface ListProps {
  items: any[];
}

function List({ items }: ListProps) {
  return (
    <View>
      {items.map((item) => (
        <View key={item} style={styles.listItem}>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});

export default List;
