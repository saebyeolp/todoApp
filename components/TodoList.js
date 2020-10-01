import React,{ useState } from 'react';
import { ScrollView } from 'react-native';
import { Container, Content, View, Text } from 'native-base';
import TodoItems from './TodoItems';
import AddTodo from './AddTodo';
import Styles from './Styles';


const TodoList = () => {

    const todoData = [
        { key: 1, text: 'Study React Native' },
        { key: 2, text: 'Study JavaScript' },
        { key: 3, text: 'Study JavaScript Study JavaScriptStudy JavaScriptStudy JavaScriptStudy JavaScriptStudy JavaScript' },
    ];

    const [todos, setTodos] = useState(todoData);

    const handleAdd = (todo) => {
        todo.key = todos.length + 1
        setTodos([ ...todos, todo ])
    }

    const handleChecked = (id) => {
        setTodos(
          todos.map((todo) => {
            if (todo.key === id) todo.checked = !todo.checked;
            return todo;
          })
        )
    };

    const handleDelete = (id) => {
        setTodos(
          todos.filter((todo) => {
            if (todo.key !== id) 
            return true
          })
        )
    }


    return (
        <Container style={Styles.container}>
            <View style={Styles.content}>

                <AddTodo 
                    handleAdd={handleAdd}
                />

                <ScrollView>
                    {todos.length === 0? (<Text>Please Add New Task!</Text>)
                        :todos.map((list) => (
                            <TodoItems
                                key={list.key}
                                text={list.text}
                                checked={list.checked}
                                setChecked={() => handleChecked(list.key)}
                                delete={() => handleDelete(list.key)}
                                // editTodoRow={editTodoRow}
                            />
                    ))}
                </ScrollView>

            </View>
        </Container>
    );
}

export default TodoList;


// code source https://github.com/taniarascia/react-hooks
// https://medium.com/@hartaniyassir/build-a-todo-app-in-react-native-using-hooks-9953f1066d67
// https://github.com/jemise111/react-native-swipe-list-view
