import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FORM, HOME, TERMS} from './utils/routes';
import Form from './form';
import Terms from './terms';
import Home from './home';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={FORM}
        component={Form}
      />
      <Stack.Screen name={TERMS} component={Terms} />
      <Stack.Screen name={HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
