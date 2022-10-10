import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

interface InstructionTextProps {
  children: React.ReactNode;
  style?: any;
}

function InstructionText({ children, style }: InstructionTextProps) {
  return <Text style={[style, styles.instructionText]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontFamily: "open-sans",
    fontSize: 24,
  },
});

export default InstructionText;
