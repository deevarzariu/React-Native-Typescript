import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Colors from "../../constants/colors";

interface NumberContainerProps {
  children: React.ReactNode;
}

function NumberContainer({ children }: NumberContainerProps) {
  const { width } = useWindowDimensions();

  const containerStyle = {
    padding: width < 380 ? 12 : 24,
    margin: width < 380 ? 12 : 24,
  };

  const numberTextStyle = {
    fontSize: width < 380 ? 28 : 36,
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.numberText, numberTextStyle]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
