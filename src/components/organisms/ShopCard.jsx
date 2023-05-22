import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const TitleView = styled.View`
  padding: 0 10px;
`;
const CardImage = styled.Image`
  margin-right: 6px;
`;
const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
const Icon = styled.Image``;
const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;
const SubTitle = styled.Text`
  font-family: UberMoveMedium;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6b6b6b;
`;
const BorderBottom = styled.View`
  height: 1px;
  border: 1px solid #e8e8e8;
  width: 251px;
  position: absolute;
  bottom: 0;
`;
const ShopCard = ({ onPress, image, title, subtitle, desc }) => {
  return (
    <Container onPress={onPress}>
      <InfoContainer>
        <CardImage source={image} />
        <TitleView>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
          <SubTitle>{desc}</SubTitle>
          <BorderBottom />
        </TitleView>
      </InfoContainer>
      <Icon
        source={require("../../../assets/images/ShopScreenImages/arrowright.png")}
      />
    </Container>
  );
};

export default ShopCard;
