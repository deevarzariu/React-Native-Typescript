import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { GlobalStyles } from "../../constants/styles";

interface InputProps {
  label: string;
  style?: StyleProp<any>;
  inputConfig?: TextInputProps;
  invalid?: boolean;
}

function Input({ label, style, inputConfig, invalid }: InputProps) {
  const labelStyles = [styles.label, invalid && styles.invalidLabel];

  const inputStyles = [
    styles.input,
    inputConfig?.multiline && styles.inputMultiline,
    invalid && styles.invalidInput,
  ];

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={labelStyles}>{label}</Text>
      <TextInput style={inputStyles} {...inputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});

export default Input;
