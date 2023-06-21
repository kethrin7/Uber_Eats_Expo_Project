import { View } from "react-native";
import React from "react";
import styled from "styled-components";

import Text from "./Text";

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;
const Title = styled(Text)`
  font-family: "Uber-Medium";
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

const IconWrapper = styled.View`
  width: 20px;
  height: 20px;
  margin-right: 22px;
`;

const IconTitle = ({ icon, title }) => {
  return (
    <Container>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
    </Container>
  );
};

export default IconTitle;
