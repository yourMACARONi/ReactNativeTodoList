import React from "react";
import { View, Alert, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";
import CheckBox from "react-native-check-box";
import { useState } from "react";
import { Icon } from "react-native-elements";
import { Overlay, Button, Text, Input } from "react-native-elements";
import { value } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";

let date = new Date().toISOString().slice(0, 10);

export default function ToDoList({ item, deleteItem, text}) {
  const [check, setCheck] = useState(false);
  const [visible, setVisible] = useState(false);
  // const [newvalue, setNewValue] = useState(null);


  

  // const toggleOverlay = () => {
  //   setVisible(!visible);
  // };

    
  // const updateItem = (todo, index) => {
  //   setNewValue(todo);
  // };

  // const itemEdit = () => {
  //   const updatedItem = newvalue.map((item, index) =>{
  //       if(item.id === newvalue.id){
  //         return {...item, title: value}
  //       }

  //       return item;
        
  //   });
  //   setNewValue(updatedItem);
  //       itemEdit(null);
  //       newvalue("");
  // }

  return (
    <ComponentContainer>
      <ListContainer>
        <CheckBox
          style={{
            flex: 1,
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setCheck(!false)}
          isChecked={check}
          checked={check}
          checkedCheckBoxColor="#0F0"
        ></CheckBox>

        <View>
          <TextItem>{item.value}</TextItem>
          <TextDate>{date}</TextDate>
        </View>
        <IconContainer onPress={() => deleteItem(item.key)}>
          <MaterialIcons name="delete" size={24} color="red" />
        </IconContainer>
        <IconContainer></IconContainer>
        <IconContainer></IconContainer>

        {/* Edit button */}
        {/* <IconContainer onPress={() => toggleOverlay()}>
          <MaterialIcons name="edit" size={24} color="blue" />

          <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <View style={{ width: 400, height: 220, }}>
              <Text>{item.text}</Text>
            

              <Input
                newvalue={newvalue}
                placeholder="Update task"
                updateItem={updateItem}
              /> */}

              {/* save button */}
              {/* <Button onPress={() => itemEdit(item)} title="Save" />

              <Text></Text> */}

              {/* cancel button */}
              {/* <Button onPress={() => setVisible(false)} title="Cancel" />
            </View>
          </Overlay>
        </IconContainer> */}
      </ListContainer>
    </ComponentContainer>
  );
}

const ListContainer = styled.TouchableOpacity`
  height: auto;
  width: 440px;
  margin-bottom: 30px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  height: auto;
  width: auto;
`;

const TextItem = styled.Text`
  color: white;
  width: 260px;
  height: auto;
  font-size: 20px;
  margin-top: 10px;
  margin-right: 20px;
`;

const TextDate = styled.Text`
  color: gold;
  font-size: 15px;
  margin-right: 20px;
  border-radius: 10px;
  width: 80px;
`;

const IconContainer = styled.TouchableOpacity`
  margin-right: 10px;
  margin-top: 15px;
  height: 40px;
  border-radius: 10px;
`;
