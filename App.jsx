import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

import {StyleSheet, View} from 'react-native';
import RootNavigator from './src/rootNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <View style={styles.container}>
          <RootNavigator />
        </View>
      </ApplicationProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
