import React, {useState} from 'react';
import {Text, StyleSheet, TextInput, Button, View} from 'react-native';

export default function AddTodo({submitHandler}) {
  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        placeholder="add todo ... "
        onChangeText={changeHandler}
        style={Styles.input}
      />
      <Button
        title="Add todo"
        onPress={() => submitHandler(text)}
        color="pink"
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
