import React,{useState} from 'react';
import {View, Item, Form, Input, Text} from 'native-base';
import Styles from './Styles';


const AddTodo = (props) => {

    const initialTodo = {id: null, text: ''};
    const [todo, setTodo] = useState(initialTodo);
    
    const handleInput = (text, value) => {
        setTodo({...todo, [text]: value});
    }

    return (
        <View style={Styles.AddTodoBox}>
            <Form style={Styles.formStyle}>
                <Text style={Styles.title}>Add item</Text>
                <Item style={Styles.formBox}>
                    <Input
                        style={Styles.textInput}
                        placeholder={'Item'}
                        onChangeText={(text) => handleInput('text', text)}
                        value={todo.text}
                        // onChange={handleInput}
                        onSubmitEditing={() => {
                            if (!todo.text) return;

                            props.handleAdd(todo);
                            setTodo(initialTodo);
                    }}>
                    </Input>
                </Item>
            </Form>
        </View>
    )
}

export default AddTodo;