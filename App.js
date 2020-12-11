// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <ImageBackground style={{width: "100%", height: "100%", resizeMode: "contain"}} source={{ uri: "https://github.com/lvlFarrukh/ToDo-App/blob/master/todo_back.jpg?raw=true" }}>

        <View style={styles.TopBar}>
          <Text style={styles.Head}>TODO LIST</Text>
        </View>

        <View style={styles.todos}>

          <View style={styles.todoItem}>
            <Text style={styles.todoText}>
              Conqure India
            </Text>

            <Icon 
              name="edit"
              size={25}
              color={'green'}
              style={{margin: 5}}
              onPress={()=>{}}
            />

            <Icon 
              name="remove"
              size={25}
              color={'red'}
              style={{margin: 5}}

            />
            
          </View>

          <View style={styles.todoItem}>
            <Text style={styles.todoText}>
              Conqure India
            </Text>

            <Icon 
              name="edit"
              size={25}
              color={'green'}
              style={{margin: 5}}
              onPress={()=>{}}
            />

            <Icon 
              name="remove"
              size={25}
              color={'red'}
              style={{margin: 5}}

            />
            
          </View>

          <View style={styles.todoItem}>
            <Text style={styles.todoText}>
              Conqure India
            </Text>

            <Icon 
              name="edit"
              size={25}
              color={'green'}
              style={{margin: 5}}
              onPress={()=>{}}
            />

            <Icon 
              name="remove"
              size={25}
              color={'red'}
              style={{margin: 5}}

            />
            
          </View>

          <View style={styles.todoItem}>
            <Text style={styles.todoText}>
              Conqure India
            </Text>

            <Icon 
              name="edit"
              size={25}
              color={'green'}
              style={{margin: 5}}
              onPress={()=>{}}
            />

            <Icon 
              name="remove"
              size={25}
              color={'red'}
              style={{margin: 5}}

            />
            
          </View>

        </View>
        

        <View style={styles.inputTodo}>
          <TextInput 
            autoCorrect={false}
            placeholder="Enter todo"
            style={styles.inp}
          />

          <TouchableOpacity activeOpacity={0.8} style={styles.addBtn}>
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
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    backgroundColor: "royalblue",
    color: "white",
    padding: 5,
    paddingTop: 30,
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
    flex: 2,
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
    paddingLeft: 5
  },
  

});
