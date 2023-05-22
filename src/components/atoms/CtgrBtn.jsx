import React from "react";
import { Image } from "react-native";
import styled from "styled-components";

const Container = styled.Pressable`
  height: 40px;
  background-color: ${({ light }) => (light ? `#EEEEEE` : `#000000`)};
  display: flex;
  flex-direction: row;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Title = styled.Text`
  font-family: UberMoveMedium;
  color: ${({ light }) => (light ? "#000000" : "#FFFFFF")};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

const Icon = styled.Image`
  ${({ iconLeft }) => (iconLeft ? "margin-right:10px" : "margin-left:10px")}
`;
const CtgrBtn = ({
  title,
  onPress,
  light = false,
  iconLeft,
  iconRight,
  ...otherProps
}) => {
  return (
    <Container onPress={onPress} light={light} {...otherProps}>
      {Icon && <Image source={iconLeft} iconLeft={iconLeft}/>}
      <Title light={light}>{title}</Title>
      {Icon && <Image source={iconRight} />}
    </Container>
  );
};

export default CtgrBtn;
