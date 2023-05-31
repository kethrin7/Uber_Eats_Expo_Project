import { ScrollView, View, Image, Pressable } from "react-native";
import React from "react";

import * as ROUTES from "../../../src/constants/Routes";
import DeliveryDetailsCard from "../organisms/DeliveryDetailsCard";
import Screen from "../atoms/Screen";
import Text from "../atoms/Text";
import styled from "styled-components";


const Container = styled(Screen)``;
const TitleWrapper = styled.View`
  margin: 0 22px;
`;
const MainTitle = styled(Text)`
  font-size: 24px;
  margin: 15px 0 8px 0;
`;
const Subtitle = styled(Text)`
  font-family: UberMoveMedium;
`;

const DeliveryTime = styled.View`
  display: flex;
  flex-direction: row;
  margin: 15px 22px;
  justify-content: space-between;
`;
const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0 22px 14px 22px;
  align-items:center;
`;
const ImageWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6;
`;
const TrackOrder = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
      <Pressable onPress={()=>navigation.navigate(ROUTES.MAP)}>
        <Container>
          <TitleWrapper>
            <MainTitle>Preparing your order...</MainTitle>
            <Subtitle>Arriving at 10:15</Subtitle>
          </TitleWrapper>
          <DeliveryTime>
            <Image
              source={require("../../../assets/images/DeliveryImages/greenline.png")}
            />
            <Image
              source={require("../../../assets/images/DeliveryImages/greenline.png")}
            />
            <Image
              source={require("../../../assets/images/DeliveryImages/grayline.png")}
            />
            <Image
              source={require("../../../assets/images/DeliveryImages/grayline.png")}
            />
            <Image
              source={require("../../../assets/images/DeliveryImages/grayline.png")}
            />
          </DeliveryTime>

          <Wrapper>
            <Subtitle style={{marginRight:5}}>Latest arrival by 10:40</Subtitle>
            <Image
              source={require("../../../assets/images/DeliveryImages/!.png")}
            />
          </Wrapper>
          <ImageWrapper>
            <Image
              source={require("../../../assets/images/DeliveryImages/prepare.png")}
            />
          </ImageWrapper>
          <DeliveryDetailsCard />
        </Container>
      </Pressable>
    </ScrollView>
  );
};

export default TrackOrder;
