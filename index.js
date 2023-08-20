import {
  AppRegistry,
  FlatList,
  StyleSheet,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {name as appName} from './app.json';
import Header from './Components/Header';
import TodoItems from './Components/TodoItems';
import AddTodo from './Components/AddTodo';

const TodosApp = () => {
  let [todos, setTodos] = useState([
    {name: 'buy coffee', key: '1'},
    {name: 'eat breakfast', key: '2'},
    {name: 'sleep well', key: '3'},
    {name: 'code an app', key: '4'},
  ]);

  const pressHandler = key => {
    setTodos(prevTodo => {
      return prevTodo.filter(todos => todos.key != key);
    });
  };

  const submitHandler = textVal => {
    if (textVal.length > 3) {
      setTodos(prevTodo => {
        return [{name: textVal, key: Math.random().toString}, ...prevTodo];
      });
    } else {
      Alert.alert('OOPS!', 'todo must be grater than 3 chars', [
        {text: 'understood', onPress: () => console.log('closed')},
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={Styles.container}>
        {/* form header */}
        <Header />
        <View style={Styles.content}>
          {/* add todos */}
          <AddTodo submitHandler={submitHandler} />
          <View style={Styles.list}>
            {/* todo list */}
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItems item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

AppRegistry.registerComponent(appName, () => TodosApp);

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    background: '#ffffff',
  },

  content: {
    flex: 1,
    padding: 4,
  },

  list: {
    flex: 1,
    marginTop: 20,
    color: '#352F44',
  },
});
