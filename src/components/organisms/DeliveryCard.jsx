import React, { useState } from "react";
import { Image, View, Pressable } from "react-native";
import styled from "styled-components";

import Text from "../atoms/Text";
import { Checkbox } from "expo-checkbox";

const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const InnerContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 0 22px;
  align-items: center;
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

const TitleWrapper = styled.View``;

const AddItemSection = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #eeeeee;
  padding: 15px;
  margin: 0 22px 16px 22px;
`;

const AddItemView = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #eeeeee;
  border-radius: 50px;
  width: 120px;
  padding: 15px;
  margin-left: 22px;
`;

const CheckboxView = styled.View`
  width: 239px;
  background-color: #eeeeee;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 33px 0 33px 22px;
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DeliveryCard = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <View>
      <Container>
        <InnerContainer>
          <Image
            source={require("../../../assets/images/DeliveryImages/Number.png")}
          />
          <TitleWrapper>
            <Title>Cantina Crispy Chicken</Title>
            <SubTitle>6 Wings • Side of Celery •</SubTitle>
            <SubTitle>Ranch Dip</SubTitle>
          </TitleWrapper>
        </InnerContainer>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Image
            style={{ marginRight: 22 }}
            source={require("../../../assets/images/DeliveryImages/label.png")}
          />
          <TitleWrapper style={{ marginRight: 22 }}>
            <Text>US$13.18</Text>
            <Text
              style={{
                color: "#545454",
                fontSize: 14,
                textDecorationLine: "line-through",
              }}
            >
              US$13.18
            </Text>
          </TitleWrapper>
        </View>
      </Container>

      <AddItemSection>
        <TitleWrapper>
          <Title style={{ paddingBottom: 10 }}>Cantina Crispy Chicken</Title>
          <GreenSubTitle>Buy 1, get 1 free (add 2 to basket)</GreenSubTitle>
        </TitleWrapper>
        <View>
          <Image
            source={require("../../../assets/images/DeliveryImages/AddButton.png")}
          />
        </View>
      </AddItemSection>

      <AddItemSection>
        <TitleWrapper>
          <Title style={{ paddingBottom: 10 }}>Spicy Cheesy Double</Title>
          <GreenSubTitle>Buy 1, get 1 free (add 2 to basket)</GreenSubTitle>
        </TitleWrapper>
        <View>
          <Image
            source={require("../../../assets/images/DeliveryImages/AddButton.png")}
          />
        </View>
      </AddItemSection>

      <AddItemSection>
        <TitleWrapper>
          <Title style={{ paddingBottom: 10 }}>Mango Freeze</Title>
          <GreenSubTitle>Buy 1, get 1 free (add 2 to basket)</GreenSubTitle>
        </TitleWrapper>
        <View>
          <Image
            source={require("../../../assets/images/DeliveryImages/AddButton.png")}
          />
        </View>
      </AddItemSection>

      <AddItemView onPress={() => console.log("item added")}>
        <Image
          style={{ marginRight: 10 }}
          source={require("../../../assets/images/DeliveryImages/Plus.png")}
        />
        <Text>Add item</Text>
      </AddItemView>

      <Wrapper>
        <CheckboxView>
          <Title>Request utensils, etc.</Title>
          <Checkbox value={isChecked} onValueChange={handleCheckboxChange} />
        </CheckboxView>
        <View
          style={{
            backgroundColor: "#EEEEEE",
            padding: 15,
            alignItems: "center",
          }}
        >
          <Pressable onPress={() => console.log("add note")}>
            <Title>Add note</Title>
          </Pressable>
        </View>
      </Wrapper>
    </View>
  );
};

export default DeliveryCard;
