import { View, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import styled from "styled-components";

import Text from "../atoms/Text";

const CardContainer = styled.Pressable`
  margin: 0 22px;
  width: 110px;
`;
const Title = styled(Text)`
  font-size: 18px;
`;
const Price = styled(Text)`
  margin: 5px 0;
`;
const Quantity = styled(Text)``;

const StoreCard = ({ onPress, title, price, quantity, image }) => {
  return (
    <CardContainer onPress={onPress}>
      <Image source={image} />
      <Title>{title}</Title>
      <Price>${price}</Price>
      <Quantity>{quantity}</Quantity>
    </CardContainer>
  );
};

export default StoreCard;
