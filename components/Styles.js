import {StyleSheet} from 'react-native';


const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      padding: 20,
    },
    // TodoItems
    listWrapper: {
      width: '100%',
      minHeight: 0,
      flex: 1,
      flexDirection: 'row',
      paddingTop: 0,
      paddingBottom: 0,
    },
    done: {
      textDecorationLine: 'line-through',
      color: '#555',
      paddingTop: 4,
    },
    notDone: {
      fontWeight: 'bold',
      paddingTop: 4,
    },
    swipecontainer: {
      backgroundColor: 'white',
      flex: 1,
    },
    standalone: {
      paddingTop: 2,
      paddingBottom: 2,
    },
    standaloneRowFront: {
      backgroundColor: '#FFF',
      justifyContent: 'center',
      minHeight: 50,
      flexDirection: 'row',
      paddingLeft: 20,
      paddingTop: 10,
    },
    standaloneRowBack: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
    },
    editBtn: {
      textAlign: 'center',
      backgroundColor: '#848484',
      color: '#FFF',
      height: '100%',
    },
    deleteBtn: {
      textAlign: 'center',
      backgroundColor: '#848484',
      borderRadius: 3,
      height: '100%',
    },
    btnText: {
      color: '#FFF',
      textTransform: 'capitalize',
    },
    backTextWhite: {
      color: '#FFF',
    },
    //editTodo
    formStyle: {
      padding: 0,
      margin: 0,
    },
    formBox: {
      display: 'flex',
      position:'relative',
    },
    title: {
      marginTop:10,
    },
    textInput: {
      borderWidth:1,
      borderColor:'#969696',
      height:55,
      paddingLeft: 20,
      marginBottom: 25,
      marginTop: 10,
      borderRadius: 5,
    },
    cancelBtn : {
      position:'absolute',
      right:5,
      top:15,
    },
});
  

export default Styles;