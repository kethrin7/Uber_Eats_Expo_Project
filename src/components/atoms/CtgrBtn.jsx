import React from "react";
import { Image } from "react-native";
import styled from "styled-components";
import Text from "./Text";

const Container = styled.Pressable`
  height: 40px;
  background-color: ${({ light }) => (light ? `#ffffff` : `#000000`)};
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Title = styled (Text)`
  color: ${({ light }) => (light ? "#000000" : "#EEEEEE")};
  font-size: 18px;
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
