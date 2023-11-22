import React, { useState } from "react";
import {Text, Alert} from "react-native";
import styled from "styled-components";

export default function AddInput({ submitHandler }) {
  const [value, setValue] = useState("");

  const onChangeText = (text) => {
    setValue(text);

    
  };

  


  return (
    <ComponentContainer>
      <InputContainer>
        <Input value={value} placeholder="Add Task..." onChangeText={onChangeText} />
      </InputContainer>

      <SubmitButton
        onPress={() => {
          if (value === undefined) {
            Alert.alert("Task is Empty", "Add some");
          }
          else {
            setValue(submitHandler(value));
          }

        }}
      >

        <Text>ADD</Text>
      </SubmitButton>
    </ComponentContainer>
  );
}

// the styles

const ComponentContainer = styled.View`
  flex-direction: row;
`;

const InputContainer = styled.View`
  flex-direction: row;
  border-radius: 10px;
`;

const Input = styled.TextInput`
  font-size: 20px;
  width: 300px;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.40);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const SubmitButton = styled.TouchableOpacity`
  width: 90px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 50px;
  background: rgba(74, 255, 41, 0.59);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(74, 255, 41, 0.3);

`;
