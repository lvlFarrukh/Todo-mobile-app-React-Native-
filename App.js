// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, FlatList } from 'react-native';


export default function App() {
  let [inpVal, setinpVal] = useState('')
  let [todo, setTodo] = useState([]);

  const addTodo = val=> {
    if(val != ""){
      setTodo([...todo, {task: val, done: 0}])
      setinpVal("") 
    }
  }

  const remove = ind=> {
    let todos = todo.filter((v, i)=> {
      return i != ind 
    })
    setTodo(todos)
  }


  return (
    <View style={styles.container}>

      <ImageBackground style={{width: "100%", height: "100%", resizeMode: "contain"}} source={{ uri: "https://github.com/lvlFarrukh/ToDo-App/blob/master/todo_back.jpg?raw=true" }}>

        <View style={styles.TopBar}>
          <Text style={styles.Head}>TODO LIST</Text>
          <TouchableOpacity onPress={()=>{setTodo([])}} style={styles.clrBtn}>
            <Text style={styles.clrText}>
              Clear All
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.todos}>

          <FlatList
            data={todo}
            renderItem={(data)=>{
              return (
                <View style={styles.todoItem}>
                  <Text style={styles.todoText}>
                    {data.item.task}
                  </Text>

                  <Icon 
                    name="remove"
                    size={25}
                    color={'red'}
                    style={{padding: 5, position: "absolute", right: 10}}
                    onPress={()=>{remove(data.index)}}
                  />
                  
                </View>
              )
            }}
            keyExtractor={item => item.id}
          />

        </View>
        

        <View style={styles.inputTodo}>
          <TextInput 
            autoCorrect={false}
            placeholder="Enter todo"
            style={styles.inp}
            value={inpVal}
            onChangeText={(text)=> {setinpVal(text)}}
          />

          <TouchableOpacity onPress={()=> {addTodo(inpVal)}} activeOpacity={0.8} style={styles.addBtn}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>

          
        </View>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Head: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  inputTodo: {
    flex: 1.5,
    // backgroundColor: "brown",
    paddingLeft: 15,
    flexWrap: "wrap"
  },
  inp: {
    borderBottomWidth: 2,
    height: 50,
    width: 270,
    fontSize: 20,
    paddingLeft: 5,
    marginRight: 10,
  },
  todos: {
    flex: 10,
  },
  TopBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "royalblue",
    padding: 5,
    paddingTop: 25,
    paddingBottom: 5,
    paddingLeft: 10,
    marginBottom: 5
  },
  addBtn: {
    backgroundColor: "royalblue",
    paddingLeft: 14.5,
    margin: 5,
    borderRadius: 40,
    height: 48,
    width: 48,
    marginTop: 10
  },
  btnText: {
    fontSize: 35,
    alignItems: "center",
    color: "white",
    fontWeight: "bold",
  },
  todoItem: {
    backgroundColor: "#a39fb6",
    width: "95%",
    borderRadius: 6,
    flexDirection: "row",
    padding: 5,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 5,
    marginTop: 5,
    alignItems: "center"
    // flexWrap: 'wrap'
  },
  todoText: {
    width: "80%", 
    fontSize: 20, 
    paddingLeft: 5,
    color: "white",
    fontWeight: "bold"
  },
  clrBtn: {
    position: "absolute",
    right: 10,
    bottom: 15
  },
  clrText: {
    color: "white",
  }

});
