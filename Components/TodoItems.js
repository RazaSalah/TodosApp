import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function TodoItems({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={Styles.Todoitem}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  Todoitem: {
    padding: 16,
    margin: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 15,
    borderColor: 'black',
    fontSize: 16,
  },
});
