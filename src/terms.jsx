import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Terms = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Terms & Conditions</Text>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 30},
});

export default Terms;
