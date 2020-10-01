import {StyleSheet} from 'react-native';


const Styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      width: '100%',
      height: '100%',
      flex: 1,
    },
    emptyBox: {
      textAlign: 'center',
      paddingTop: 20,
      fontSize: 20,
    },

    // TodoItems
    itemWrapper: {
      width: '100%',
      flex: 1,
      flexDirection: 'row',
    },
    itemContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      paddingTop: 3,
      paddingBottom: 3,
    },
    checkBoxContainer: {
      flex : 1,
      marginLeft: 10,
    },
    todoContainer: {
      flex: 7,
      paddingTop: 12,
      paddingBottom: 10,
      lineHeight: 1.4
    },
    editBtnContainer: {
      flex: 1,
      backgroundColor: 'white',
    },
    deleteBtnContainer: {
      flex: 1,
    },
    done: {
      textDecorationLine: 'line-through',
      color: '#555',
    },
    notDone: {
    },

    //AddTodo
    AddTodoBox: {
      paddingTop: 40,
      paddingRight: 12,
    },
    formStyle: {
      padding: 0,
      margin: 0,
    },
    formBox: {
      display: 'flex',
    },
    title: {
      marginTop: 10,
      fontSize: 20,
    },
    textInput: {
      borderWidth:1,
      borderColor:'#969696',
      height:55,
      marginBottom: 25,
      marginTop: 10,
      borderRadius: 5,
    },

    //editTodo
    textInputEdit: {
      borderWidth:1,
      borderColor:'#ccc',
      height:55,
      marginBottom: 25,
      marginTop: 10,
      borderRadius: 5,
      backgroundColor: '#ebebeb'
    },
    editBtn : {

    },
});
  

export default Styles;