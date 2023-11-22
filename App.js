import React, { useState } from "react";
import { View, StatusBar, FlatList } from "react-native";
import styled from "styled-components";
import AddInput from "./components/AddInput";
import ToDoList from "./components/ToDoList";
import Empty from "./components/Empty";
import Header from "./components/Header";


export default function App() {
  const [data, setData] = useState([]);
  
  
    


  const deleteItem = (key) => {
    setData((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

 

  const submitHandler = (value) => {
    setData((prevTodo) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        ...prevTodo,
      ];
    });
  };
  return (
    <ComponentContainer>
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#003333" />
      </View>

      <View>
        <FlatList
          data={data}
          ListHeaderComponent={() => <Header />}
          ListEmptyComponent={() => <Empty />}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <ToDoList item={item} deleteItem={deleteItem}/>
          )}
        />

        <View>
          <AddInput submitHandler={submitHandler} />
        </View>
      </View>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  background-color: #006699;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
