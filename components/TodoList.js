import React,{ useState } from 'react';
import { ScrollView } from 'react-native';
import { Container, Content, View, Text } from 'native-base';
import TodoItems from './TodoItems';
import Styles from './Styles';


const TodoList = () => {

    const todoData = [
        { id: 1, text: 'Study React Native', checked : false },
		{ id: 2, text: 'Study JavaScript', checked : false }
    ];

    const [todos, setTodos] = useState(todoData);

    const handleChecked = () => {

    };

    const handleDelete = () => {

    };


    return (
        <Container style={Styles.container}>
            <Content>
                <ScrollView>
                    {todos.map((list) => (
                        <TodoItems
                            id={list.id}
                            key={list.id}
                            text={list.text}
                            checked={list.checked}
                            // setChecked={() => handleChecked(list.id)}
                            // // editTodoRow={editTodoRow}
                            // delete={() => handleDelete(list.id)}
                        />
                    ))}
                </ScrollView>
            </Content>
        </Container>
    );
}

export default TodoList;