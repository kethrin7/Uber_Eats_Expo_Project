import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import * as ROUTES from "../../../src/constants/Routes";

import Screen from "../atoms/Screen";

const Container = styled(Screen)``;

const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 24px 0 0 22px;
`;
const InfoCardWrapper = styled.View`
  margin-left: 20px;
`;
const InfoMainTitle = styled.Text`
  font-family: UberMoveBold;
  margin: 22px 0 0 22px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;
const InfoIcon = styled.Image``;
const InfoTitle = styled.Text`
  font-family: UberMoveMedium;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;
const InfoSubTitle = styled.Text`
  font-family: UberMoveMedium;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #6b6b6b;
`;

const OtherInfoContainer = styled.View`
  margin-top: 44px;
`;

const SignOut = styled.Text`
  font-family: UberMoveMedium;
  margin: 24px 0 0 22px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1d5c2e;
`;

const Separator = styled.View`
  height: 1px;
  border: 1px solid #e8e8e8;
  width: 100%;
  position: absolute;
  top: 0;
  margin-top: 10px;
`;

const SettingDetailsCard = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Separator />

      <InfoMainTitle>Saved places</InfoMainTitle>
      <CardContainer>
        <InfoIcon
          source={require("../../../assets/images/SettingImages/Home.png")}
        />
        <InfoCardWrapper>
          <InfoTitle>Home</InfoTitle>
          <InfoSubTitle>Add Home</InfoSubTitle>
        </InfoCardWrapper>
      </CardContainer>
      <CardContainer>
        <InfoIcon
          source={require("../../../assets/images/SettingImages/Work.png")}
        />
        <InfoCardWrapper>
          <InfoTitle>Work</InfoTitle>
          <InfoSubTitle>Add Work</InfoSubTitle>
        </InfoCardWrapper>
      </CardContainer>

      <OtherInfoContainer>
        <Separator />

        <InfoMainTitle>Other Options</InfoMainTitle>
        <SignOut
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: ROUTES.SIGN_IN_SCREEN }],
            });
          }}
        >
          Sign Out
        </SignOut>
      </OtherInfoContainer>
    </Container>
  );
};

export default SettingDetailsCard;
