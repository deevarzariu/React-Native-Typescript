import { View, Text, StyleSheet } from "react-native";

interface SubtitleProps {
  children: JSX.Element | string;
}

function Subtitle({ children }: SubtitleProps) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Subtitle;
