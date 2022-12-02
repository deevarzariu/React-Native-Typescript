import React, {type PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.screen}>
      <Text>Hello World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
