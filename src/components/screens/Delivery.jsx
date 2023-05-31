import React, { useState } from "react";
import { Image, View, ScrollView, Pressable } from "react-native";
import styled from "styled-components";
import * as ROUTES from "../../../src/constants/Routes";
import Screen from "../atoms/Screen";
import { Text } from "react-native";
import DeliveryCard from "../organisms/DeliveryCard";
import GrayCtgrBtn from "../atoms/GrayCtgrBtn";

const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const MainContainer = styled(Screen)``;

const InnerContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0 22px;
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

const GreenSubTitle = styled(Text)`
  padding-left: 19px;
  color: #05a357;
  font-size: 14px;
`;

const MainTitleView = styled.View`
  margin: 0 22px;
`;

const TitleWrapper = styled.View``;

const MainTitle = styled(Text)`
  margin-bottom: 22px;
  font-size: 36px;
  width: 100%;
`;

const AdditionalWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
  padding: 0 22px;
`;

const DeliveryText = styled(Text)``;

const PriorityWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 22px 10px 22px;
  border: solid #eeeeee 2px;
`;

const PaymentSection = styled.View`
  margin: 0 22px;
`;

const PaymentContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const PaymentTitle = styled(Text)`
  color: #6b6b6b;
`;

const PaymentText = styled(Text)`
  line-height: 20px;
  font-size: 12px;
`;

const NextView = styled(Pressable)`
  background-color: #000000;
  padding: 15px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 16px;
`;

const SwicherWrapper = styled.View`
  background-color: #eeeeee;
  border-radius: 50px;
  height: 55px;
  flex-direction: row;
  padding: 5px;
  margin-bottom: 15px;
`;

const CategoryBtnWrapper = styled.View``;

const Delivery = ({ navigation }) => {
  const [ctgr, setCtgr] = useState(0);

  const handlePress = (value) => {
    setCtgr(value);
  };

  const btns = [
    { title: "Delivery", value: 0 },
    { title: "Pickup", value: 1 },
  ];

  return (
    <MainContainer>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <MainTitleView>
          <MainTitle>Delivery Details</MainTitle>
        </MainTitleView>
        <SwicherWrapper>
          {btns.map((btn) => (
            <CategoryBtnWrapper key={btn.title}>
              <GrayCtgrBtn
                title={btn.title}
                onPress={() => handlePress(btn.value)}
                key={btn.title}
                black={btn.value === ctgr ? true : false}
              />
            </CategoryBtnWrapper>
          ))}
        </SwicherWrapper>

        <Container>
          <InnerContainer>
            <Image
              source={require("../../../assets/images/DeliveryImages/location.png")}
            />
            <TitleWrapper>
              <Title>San Francisco Bay Area</Title>
              <SubTitle>CA</SubTitle>
            </TitleWrapper>
          </InnerContainer>
          <Image
            style={{ marginRight: 22 }}
            source={require("../../../assets/images/DeliveryImages/arrow.png")}
          />
        </Container>
        <Container>
          <InnerContainer>
            <Image
              source={require("../../../assets/images/DeliveryImages/Person.png")}
            />
            <TitleWrapper>
              <Title>Meet at the door</Title>
              <GreenSubTitle>Add delivery note</GreenSubTitle>
            </TitleWrapper>
          </InnerContainer>
          <Image
            style={{ marginRight: 22 }}
            source={require("../../../assets/images/DeliveryImages/arrow.png")}
          />
        </Container>
        <AdditionalWrapper>
          <View>
            <DeliveryText>Delivery time</DeliveryText>
          </View>
          <View>
            <DeliveryText>15-20 min(s)</DeliveryText>
          </View>
        </AdditionalWrapper>
        <PriorityWrapper style={{ padding: 10 }}>
          <TitleWrapper>
            <Title style={{ paddingBottom: 10 }}>Priority</Title>
            <SubTitle>Delivered directly to you</SubTitle>
          </TitleWrapper>
          <SubTitle>+US$1.99</SubTitle>
        </PriorityWrapper>
        <View
          style={{
            border: "solid",
            borderColor: "#000000",
            borderWidth: 2,
            padding: 15,
            marginRight: 22,
            marginLeft: 22,
            marginBottom: 5,
          }}
        >
          <Title>Standart</Title>
        </View>
        <View
          style={{
            border: "solid",
            borderColor: "#EEEEEE",
            borderWidth: 2,
            padding: 15,
            marginRight: 22,
            marginLeft: 22,
          }}
        >
          <Title>Schedule</Title>
        </View>
        <AdditionalWrapper>
          <View>
            <Title>Your items</Title>
          </View>
          <View>
            <GreenSubTitle style={{ fontSize: 16 }}>see menu</GreenSubTitle>
          </View>
        </AdditionalWrapper>
        <DeliveryCard />
        {/* gift and promotion section */}
        <Container>
          <InnerContainer>
            <Image
              source={require("../../../assets/images/DeliveryImages/gift.png")}
            />
            <TitleWrapper>
              <Title>Make it a gift</Title>
              <SubTitle>Add recipient info and a message</SubTitle>
            </TitleWrapper>
          </InnerContainer>
          <Image
            style={{ marginRight: 22 }}
            source={require("../../../assets/images/DeliveryImages/arrow.png")}
          />
        </Container>
        <Container>
          <InnerContainer>
            <Image
              source={require("../../../assets/images/DeliveryImages/label.png")}
            />
            <TitleWrapper>
              <Title>Promotion applied</Title>
              <GreenSubTitle>You’re saving US$25</GreenSubTitle>
            </TitleWrapper>
          </InnerContainer>
          <Image
            style={{ marginRight: 22 }}
            source={require("../../../assets/images/DeliveryImages/arrow.png")}
          />
        </Container>
        <PaymentSection>
          <PaymentContainer>
            <PaymentTitle>Subtotal </PaymentTitle>
            <Title> US$19.99</Title>
          </PaymentContainer>
          <PaymentContainer>
            <PaymentTitle>Promotion </PaymentTitle>
            <Title style={{ color: "#05A357" }}> -US$19.99</Title>
          </PaymentContainer>
          <PaymentContainer>
            <View style={{ flexDirection: "row" }}>
              <PaymentTitle>Delivery fee </PaymentTitle>
              <Image
                source={require("../../../assets/images/DeliveryImages/!.png")}
              />
            </View>
            <Title> US$0.49</Title>
          </PaymentContainer>
          <PaymentContainer>
            <View style={{ flexDirection: "row" }}>
              <PaymentTitle>Taxes & Other fees</PaymentTitle>
              <Image
                source={require("../../../assets/images/DeliveryImages/!.png")}
              />
            </View>
            <Title>US$10.99</Title>
          </PaymentContainer>
          <PaymentContainer>
            <PaymentTitle>Total</PaymentTitle>
            <Title> US$10.71</Title>
          </PaymentContainer>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Image
              source={require("../../../assets/images/DeliveryImages/CreditCard.png")}
            />
            <Image
              source={require("../../../assets/images/DeliveryImages/arrow.png")}
            />
          </View>

          <PaymentText style={{ marginTop: 30 }}>
            If you’re not around when the courier arrives, they’ll leave your
            order at the door. By placing your order, you agree to take full
            responsibilty for it once it’s delivered.
          </PaymentText>

          <NextView onPress={() => navigation.navigate(ROUTES.TRACK_ORDER)}>
            <Text style={{ color: "#ffffff" }}>Next • US$10.71</Text>
          </NextView>
        </PaymentSection>
      </ScrollView>
    </MainContainer>
  );
};
export default Delivery;
