import React,{ useState, useEffect } from 'react';
import { View, Item, Text, Button, Form, Input} from 'native-base';
import Styles from './Styles';


const EditTodo = (props) => {

    const [todo, setTodo] = useState(props.currentTodo);

    useEffect(() => {
        setTodo(props.currentTodo)
      },[ props ]
  )

    const handleInput = (text, value) => {
        setTodo({ ...todo, [text] : value });
    }

    return (
        <View style={Styles.AddTodoBox}>
            <Form style={Styles.formStyle}>
                <Item style={Styles.formBox}>
                    <Input 
                        style={Styles.textInputEdit}
                        onChangeText={(text) => handleInput("text", text)}
                        value={todo.text}
                    />
                    <View>
                        <Button 
                            transparent
                            style={Styles.editBtn}
                            onPress={(e) => {
                                e.preventDefault()
                                props.handleEdit(todo.id, todo)
                            }}
                        >
                            <Text style={{paddingBottom:15, color:"black"}}>EDIT</Text>
                        </Button>
                    </View>
                </Item>
            </Form>
        </View>
    );

}

export default EditTodo;