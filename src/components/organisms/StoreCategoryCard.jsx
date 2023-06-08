import { View, Image } from "react-native";
import React from "react";
import styled from "styled-components";

import Text from "../atoms/Text";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 22px;
  align-items: center;
`;
const Title = styled(Text)`
  font-size: 16px;
`;
const Icon = styled.Image`
  width: 11px;
  height: 11px;
`;
const MainImage = styled.Image`
  width: 40px;
  height: 40px;
`;

const StoreCategoryCard = ({ onPress, image, title }) => {
  return (
    <Container onPress={onPress}>
      <MainImage source={image} />
      <Title>{title}</Title>
      <Icon
        source={require("../../../assets/images/ShopScreenImages/arrowright.png")}
      />
    </Container>
  );
};

export default StoreCategoryCard;
