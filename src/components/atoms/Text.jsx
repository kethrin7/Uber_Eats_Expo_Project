import { View, Text as RNText } from "react-native";
import React from "react";
import styled from "styled-components";

const StyledText = styled.Text`
  font-family: ${({ type }) => {
    switch (type) {
      case "Bold":
        return "UberMoveBold";
      case "Medium":
        return "Uber-Medium";
    }
  }};
  font-size: ${({ size }) => (size ? size : 16)}px;
`;

const Text = ({ children, type = "Bold", size, ...otherProps }) => (
  <StyledText type={type} size={size} {...otherProps}>
    {children}
  </StyledText>
);

export default Text;
