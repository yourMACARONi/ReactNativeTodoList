import React from "react";
import styled from "styled-components";

export default function Empty() {
  return (
    <ComponentContainer>
      <EmptyImage source={require("../assets/dazzling.png")} />
      <EmptyText>Let's add some task!</EmptyText>
      <EmptyText>タスクを追加しましょう、マスター!</EmptyText>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  margin-top: 100px;
  align-items: center;
  justify-content: center;
`;

const EmptyImage = styled.Image`
  width: 350px;
  height: 300px;
  opacity: 1;
`;

const EmptyText = styled.Text`
  color: white;
  margin-top: 30px;
  font-size: 25px;
`;
