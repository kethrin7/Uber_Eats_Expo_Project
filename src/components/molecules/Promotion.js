import { View } from "react-native";
import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import { AntDesign } from "@expo/vector-icons";

const Container = styled.View`
  padding: 14px 23px 14px 18px;
  background-color: #e9ffef;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled(Text)`
  margin-bottom: 8px;
`;
const SubTitle = styled(Text)``;

const Promotion = ({ ...otherProps }) => {
  return (
    <Container {...otherProps}>
      <View>
        <Title size={20}>Promotion applied</Title>
        <SubTitle size={14}>View basket for find discount</SubTitle>
      </View>
      <AntDesign name="exclamationcircle" size={24} color="black" />
    </Container>
  );
};

export default Promotion;
