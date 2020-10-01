import React from 'react';
import {Item, Text, View, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import Styles from './Styles';


const TodoItems = (props) => (
    <Item style={Styles.itemWrapper}>
        <View style={Styles.itemContainer}>
            
            <View style={Styles.checkBoxContainer}>
                <Button 
                    transparent
                    onPress={() => props.setChecked()}
                >
                    <Icon
                        name={props.checked ? 'check-circle' : 'circle' }
                        size={25}
                        color="#333"
                    />
                </Button>
            </View>

            <View style={Styles.todoContainer}>
                 <Text 
                    style={(props.checked == true) ? Styles.done : Styles.notDone}
                >
                    {props.text}
                </Text>
            </View>

            <View style={Styles.editBtnContainer}>
                <Button 
                    transparent
                    style={Styles.editBtn}
                    onPress={props.update}
                    onPress={() => {
                        props.editTodoRow(props)
                      }}
                >
                    <Icon 
                        name="edit"
                        color="#333"
                        size={25}
                    />
                </Button>
            </View>

            <View style={Styles.deleteBtnContainer}>
                <Button 
                    transparent
                    style={Styles.deleteBtn}
                    onPress={props.delete}
                >
                    <Icon 
                        name="trash"
                        color="#333"
                        size={25}
                    />
                </Button>
            </View>

        </View>
    </Item>
);

export default TodoItems;