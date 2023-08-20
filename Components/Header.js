import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={Styles.header}>
      <Text style={Styles.text}>My Todos</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  header: {
    height: 50,
    paddingTop: 20,
    backgroundColor: 'pink',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
