import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 102px;
  margin-bottom:35px;
`;

const RightContainer = styled.View`
  width: ${({ img }) => (img ? "60%" : "80%")};
`;

const LeftContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 4px;
`;
const Price = styled.Text`
  font-size: 14px;
  margin-bottom: 4px;
`;

const Desc = styled.Text`
  font-size: 16px;
`;
const RestDetailsCard = ({
  title = "Title",
  price = "price",
  desc = "Desc",
  img,
  onPress
}) => {
  return (
    <Container onPress={onPress}>
      <RightContainer img={img}>
        {title && <Title>{title}</Title>}
        {price && <Price>${price}</Price>}
        {desc && <Desc>{desc}</Desc>}
      </RightContainer>
      <LeftContainer>
        <Image source={img} />
      </LeftContainer>
    </Container>
  );
};

export default RestDetailsCard;
