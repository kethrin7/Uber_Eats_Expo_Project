import React from "react";
import styled from "styled-components";
import { Pressable } from "react-native";
import { Image } from "react-native";

import * as ROUTES from "../../../src/constants/Routes";
import Text from "../atoms/Text";
import Screen from "../atoms/Screen";

const BlackButtonView = styled.Pressable`
  background-color: #000000;
  padding: 15px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 16px;
  margin: 0 22px;
`;

const MainWrapper = styled(Screen)``;

const InnerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

const Title = styled(Text)`
  padding-left: 19px;
`;

const SubTitle = styled(Text)`
  padding-left: 19px;
  color: #545454;
`;
const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  margin: 15px 22px;
`;
const TitleWrapper = styled.View``;
const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SafeWayWrapper = styled.View`
  background-color: #eeeeee;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const BottomTitleWrapper = styled.View`
  background-color: #eeeeee;
  width: 285px;
  margin: 20px 20px 350px 75px;
`;
const Order = ({ navigation }) => {
  return (
    <MainWrapper>
      <Container>
        <InnerContainer>
          <Image
            source={require("../../../assets/images/DeliveryImages/location.png")}
          />
          <TitleWrapper>
            <Title>San Francisco Bay Area</Title>
            <SubTitle>John’s List</SubTitle>
          </TitleWrapper>
        </InnerContainer>
        <Image
          source={require("../../../assets/images/DeliveryImages/arrow.png")}
        />
      </Container>

      <SafeWayWrapper>
        <Wrapper>
          <Image
            source={require("../../../assets/images/StoreImages/GroceryStore.png")}
          />
          <Title>Safeway</Title>
        </Wrapper>
        <Title>$0.27</Title>
      </SafeWayWrapper>

      <Wrapper style={{marginVertical: 22}}>
        <Title> 1pc</Title>
        <Image
          style={{ width: 40, height: 40, marginHorizontal: 24 }}
          source={require("../../../assets/images/StoreImages/banana.png")}
        />
        <TitleWrapper>
          <Title>Organic Banana</Title>
          <SubTitle>$0.27/pc</SubTitle>
        </TitleWrapper>
      </Wrapper>

      <Wrapper style={{ marginHorizontal: 22 }}>
        <Image
          source={require("../../../assets/images/StoreImages/When.png")}
        />
        <Title>The minimum order amount is $10.00</Title>
      </Wrapper>

      <BottomTitleWrapper>
        <SubTitle>
          Add $29.73 more to your order and get your items delivered for free
        </SubTitle>
      </BottomTitleWrapper>

      <BlackButtonView>
        <Text style={{ color: "#ffffff" }}>Go To Checkout</Text>
      </BlackButtonView>
    </MainWrapper>
  );
};

export default Order;
