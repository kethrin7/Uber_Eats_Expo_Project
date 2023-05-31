import { View, Text as RNText } from "react-native";
import React from "react";
import styled from "styled-components";

const StyledText = styled.Text`
  font-family: ${({ type }) => {
    switch (type) {
      case "Medium":
        return "UberMoveMedium";
      case "Bold":
        return "UberMoveBold";
    }
  }};
  font-size: ${({ size }) => (size ? size : 16)}px;
`;

const Text = ({ children, type = "Medium", size, ...otherProps }) => (
  <StyledText type={type} size={size} {...otherProps}>
    {children}
  </StyledText>
);

export default Text;
