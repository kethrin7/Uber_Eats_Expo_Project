import { View, Text as RNText } from "react-native";
import React from "react";
import styled from "styled-components";

const StyledText = styled.Text`
  font-family: ${({ type }) => {
    switch (type) {
      case "Medium":
        return "Uber-Medium";
      case "Bold":
        return "Uber-Bold";
    }
  }};
  font-size: ${({ size }) => (size ? size : 18)}px;
`;

const Text = ({ children, type = "Medium", size, ...otherProps }) => (
  <StyledText type={type} size={size} {...otherProps}>
    {children}
  </StyledText>
);

export default Text;
