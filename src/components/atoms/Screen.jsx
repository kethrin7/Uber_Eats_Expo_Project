import React from "react";
import { View, Text, Platform, Dimensions, StatusBar } from "react-native";
import styled from "styled-components";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const statusBarHeight = StatusBar.currentHeight;

const MainWrapper = styled.KeyboardAvoidingView`
  flex: 1;
`;

const ImageBackground = styled.ImageBackground`
  height: ${windowHeight}px;
  width: ${windowWidth}px;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
  padding: 0 22px;
  padding-top: ${Platform.OS === "ios" ? "0" : statusBarHeight}px;
`;

const Screen = ({ children, style, ...otherProps }) => {
  return (
    <MainWrapper
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      {...otherProps}
    >
      <ImageBackground>
        <Container style={style}>{children}</Container>
      </ImageBackground>
    </MainWrapper>
  );
};

export default Screen;
