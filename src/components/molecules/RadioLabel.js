import { View } from "react-native";
import React from "react";
import Text from "../atoms/Text";
import { RadioButton } from "react-native-paper";
import styled from "styled-components";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Title = styled(Text)``;
const RadioLabel = ({ label }) => {
  return (
    <Container>
      <RadioButton />
      <Title>{label}</Title>
    </Container>
  );
};

export default RadioLabel