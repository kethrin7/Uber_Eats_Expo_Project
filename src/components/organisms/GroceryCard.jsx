import { View, Image } from "react-native";
import React from "react";
import styled from "styled-components";

import Text from "../atoms/Text";

const Container = styled.Pressable`
  width: 185px;
  height: 185px;
  ${({ color }) => (color ? `background-Color:${color}` : "")}
  display:flex;
  justify-content:space-between;
  padding:50px 25px 20px 25px;

`;

const TimeContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.45);
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

const GroceryCard = ({ onPress, color, imgUrl, deliveryTime = "60", ...otherProps }) => {
  return (
    <Container onPress={onPress} color={color} {...otherProps}>
      <Image source={imgUrl} />
      <TimeContainer>
        <Text style={{color:"#FFFFFF"}}>In {deliveryTime} Minutes</Text>
      </TimeContainer>
    </Container>
  );
};

export default GroceryCard;
