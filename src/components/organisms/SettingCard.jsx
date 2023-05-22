import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  padding: 10px 22px;
`;

const TitleContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.Text`
  font-family: UberMoveMedium;
  margin-left: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: #34a853;
`;

const Title = styled.Text`
  font-family: UberMoveBold;
  margin-left: 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;
const SettingCard = ({ onPress, image, title, subTitle }) => {
  return (
    <Container onPress={onPress}>
      <Image source={image} />
      <TitleContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TitleContainer>
    </Container>
  );
};

export default SettingCard;
