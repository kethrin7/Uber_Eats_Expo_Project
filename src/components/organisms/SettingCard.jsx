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
  margin-left: 25px;
  line-height: 20px;
  color: #34a853;
`;

const Title = styled.Text`
  margin-left: 25px;
  font-size: 14px;
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
