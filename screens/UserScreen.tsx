import { DrawerNavigationProp } from "@react-navigation/drawer";
import { View, Text, Button, StyleSheet } from "react-native";
import { RootDrawerNavigatorParamsList } from "../navigation/navigator/RootDrawerNavigator";

interface UserScreenProps {
  navigation: DrawerNavigationProp<RootDrawerNavigatorParamsList, "User">;
}

function UserScreen({ navigation }: UserScreenProps) {
  function openDrawerHandler() {
    navigation.toggleDrawer();
  }

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button title="Open Drawer" onPress={openDrawerHandler} />
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
