import { View, Text, StyleSheet } from "react-native";

interface MealDetailsProps {
  duration: number;
  complexity: string;
  affordability: string;
  style?: any;
  textStyle?: any;
}

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}: MealDetailsProps) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

export default MealDetails;
