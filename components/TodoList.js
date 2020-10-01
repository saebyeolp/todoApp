import React,{ useState } from 'react';
import { ScrollView } from 'react-native';
import { Container, View, Text } from 'native-base';
import TodoItems from './TodoItems';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import Styles from './Styles';


const TodoList = () => {

    const todoData = [
        { id: 1, text: 'Study React Native' },
        { id: 2, text: 'Study JavaScript' },
        { id: 3, text: 'Study React Hooks' },
    ];

    const intialTodo = { id: null, text: '' };

    const [todos, setTodos] = useState(todoData);
    const [currentTodo, setCurrentTodo] = useState(intialTodo);
    const [editing, setEditing] = useState(false);

    const handleAdd = (todo) => {
        todo.id = todos.length + 1
        setTodos([ ...todos, todo ])
    }

    const handleChecked = (id) => {
        setTodos(
          todos.map((todo) => {
            if (todo.id === id) todo.checked = !todo.checked;
            return todo;
          })
        )
    };

    const handleDelete = (id) => {
        setTodos(
          todos.filter((todo) => {
            if (todo.id !== id) 
            return true
          })
        )
    };

    const handleEdit = (id, updatedTodo) => {
        setEditing(false);
        setTodos(
            todos.map(todo => (
                todo.id === id ? updatedTodo:todo
            )
        ))
    }

    const editTodoRow = (todo) => {
		setEditing(true)
		setCurrentTodo({ id: todo.id, text: todo.text })
	}

    return (
        <Container style={Styles.container}>
            <View style={Styles.content}>

                { editing ? (
                    <EditTodo 
                        editing={editing}
                        setEditing={setEditing}
                        currentTodo={currentTodo}
                        handleEdit={handleEdit}
                    />
                ) : (
                    <AddTodo 
                        handleAdd={handleAdd}
                    />
                ) }

                <ScrollView>
                    {todos.length === 0? (<Text style={Styles.emptyBox}>Nothing To Do!</Text>)
                        :todos.map((list) => (
                            <TodoItems
                                key={list.id}
                                id={list.id}
                                text={list.text}
                                checked={list.checked}
                                setChecked={() => handleChecked(list.id)}
                                editTodoRow={editTodoRow}
                                delete={() => handleDelete(list.id)}
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

