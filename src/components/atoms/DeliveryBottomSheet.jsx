import React from "react";
import { Modalize } from "react-native-modalize";
import styled from "styled-components";
import { View, Image, Pressable } from "react-native";

import DeliveryCard from "../organisms/DeliveryCard";
import Text from "./Text";

const Container = styled(Modalize)`
  display: flex;
  flex-direction: row;
`;
const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
`;
const TitleWrapper = styled.View`
  width: 287px;
  display: flex;
  align-items: center;
  margin-left: 40px;
`;

const MainTitle = styled(Text)`
  font-size: 24px;
  text-align: center;
`;
const SubTitle = styled(Text)`
  color: #05a357;
  font-size: 14px;
`;
const BlackPress = styled(Pressable)`
  background-color: #000000;
  padding: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 16px 22px;
`;
const GrayPress = styled(Pressable)`
  background-color: #eeeeee;
  padding: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0 22px;
`;

const DeliveryBottomSheet = ({
  navigation,
  bottomSheetRef,
  onPress,
  modalHeight,
}) => {
  return (
    <Container ref={bottomSheetRef} modalHeight={modalHeight}>
      <Wrapper>
        <TitleWrapper>
          <MainTitle>Taco Bell (2255 Telegraph Avenue)</MainTitle>
          <SubTitle>You‘re saving US$25</SubTitle>
        </TitleWrapper>
        <Image
          style={{ marginLeft: 40 }}
          source={require("../../../assets/images/DeliveryImages/Group.png")}
        />
      </Wrapper>
      <DeliveryCard />
      <BlackPress onPress={onPress}>
        <Text style={{ color: "#ffffff" }}>Go to Checkout</Text>
      </BlackPress>
      <GrayPress onPress={() => console.log("Add Items")}>
        <Text>Add items</Text>
      </GrayPress>
    </Container>
  );
};

export default DeliveryBottomSheet;
