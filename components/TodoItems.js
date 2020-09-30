import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Item, Text, View, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import {SwipeRow} from 'react-native-swipe-list-view';
import Styles from './Styles';


const TodoItems = (props) => (
    <Item style={Styles.listWrapper}>
        <View>
            <Text>
                {props.text}
            </Text>
        </View>
    </Item>
);

export default TodoItems;