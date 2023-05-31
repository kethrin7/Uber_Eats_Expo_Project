import React from "react";
import { Image, View, Pressable } from "react-native";
import styled from "styled-components";

import Screen from "../atoms/Screen";
import Text from "../atoms/Text";

const Container = styled(Screen)``;
const DeliveryDetailsWrapper = styled.View`
  margin: 0 22px 30px 22px;
`;
const Title = styled(Text)`
  color: #6b6b6b;
  margin-top: 20px;
`;
const MainTitle = styled(Text)`
  font-size: 25px;
`;
const SubTitle = styled(Text)``;

const AdditionalWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 22px;
`;
const TitleWrapper = styled.View``;
const ShareWrapper = styled.Pressable`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 96px;
  padding: 15px;
  border-radius: 50px;
  background-color: #eeeeee;
`;
const StyledTitle = styled(Text)`
  font-size: 18px;
`;

const Total = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 22px 24px 22px;
`;
const DeliveryDetailsCard = () => {
  return (
      <Container>
        <DeliveryDetailsWrapper>
          <MainTitle>Delivery details</MainTitle>
          <Title>Address</Title>
          <SubTitle>Bay Area, San Francisco, California, USA</SubTitle>
          <Title>Type</Title>
          <SubTitle>Leave at door</SubTitle>
          <Title>Instructions</Title>
          <SubTitle>
            Please knock to let me know it has arrive and then leave it at the
            doorstep
          </SubTitle>
          <Title>Service</Title>
          <SubTitle>Standard</SubTitle>
        </DeliveryDetailsWrapper>

        <AdditionalWrapper>
          <TitleWrapper>
            <StyledTitle>Share this delivery</StyledTitle>
            <SubTitle>Let someone follow along</SubTitle>
          </TitleWrapper>
          <ShareWrapper>
            <Image
              source={require("../../../assets/images/DeliveryImages/share-2.png")}
            />
            <SubTitle style={{ paddingHorizontal: 5 }}>Share</SubTitle>
          </ShareWrapper>
        </AdditionalWrapper>

        <AdditionalWrapper style={{ marginTop: 40 }}>
          <TitleWrapper>
            <StyledTitle>Order summary</StyledTitle>
            <Text style={{ color: "#6B6B6B" }}>
              Subway, Warriors Arena Road
            </Text>
          </TitleWrapper>
          <Text style={{ color: "#05A357" }}>view reciept</Text>
        </AdditionalWrapper>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 22,
            marginVertical: 30,
          }}
        >
          <Image
            source={require("../../../assets/images/DeliveryImages/Number.png")}
          />
          <TitleWrapper style={{ marginLeft: 13 }}>
            <Text>Cantina Crispy Chicken</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Show more</Text>
              <Image
                source={require("../../../assets/images/DeliveryImages/Vector-7.png")}
              />
            </View>
          </TitleWrapper>
        </View>

        <Total>
          <Text>Total</Text>
          <Text> us $13:18</Text>
        </Total>

        <View>
          <StyledTitle style={{ marginHorizontal: 22 }}>
            Invite Friends
          </StyledTitle>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginHorizontal: 22,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/images/DeliveryImages/hamburger.png")}
            />
            <Text>Invite a friend, get $5 off</Text>
          </View>
        </View>
      </Container>
  );
};

export default DeliveryDetailsCard;
