import { StyleSheet, useWindowDimensions, View } from "react-native";
import Colors from "../../constants/colors";

interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  const { width } = useWindowDimensions();

  const cardStyle = {
    marginTop: width < 380 ? 18 : 36,
  };

  return <View style={[styles.card, cardStyle]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default Card;
