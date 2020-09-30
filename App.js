import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import TodoList from './components/TodoList';
import Styles from './components/Styles';


const App = () => {
  return (
    <View style={Styles.container}>
      <TodoList />
    </View>
  );
}


export default App;
