import { View, Image, ScrollView } from "react-native";
import React from "react";
import styled from "styled-components";

import * as ROUTES from "../../../src/constants/Routes";
import Screen from "../atoms/Screen";
import Text from "../atoms/Text";
import ItemDetailsScreen from "../organisms/ItemDetailsCard";

// data
const data = [
  {
    title: "Total Fat 0g",
    percent: "0%",
  },
  {
    title: "Saturated Fat 0g",
    percent: "0%",
  },
  {
    title: "Total Fat 0g",
    percent: "0%",
  },
  {
    title: "Sodium 0mg",
    percent: "0%",
  },
  {
    title: "Total Carbohydrate 30g",
    percent: "10%",
  },
  {
    title: "Dietary Fiber 3g",
    percent: "10%",
  },
  {
    title: "Sugars 19g",
  },
  {
    title: "Protein 1g",
  },
];

const data2 = [
  {
    grayTitle: "Potassium",
    grayPercent: "15%",
  },
  {
    grayTitle: "Calcium",
    grayPercent: "0%",
  },
  {
    grayTitle: "Iron",
    grayPercent: "2%",
  },
  {
    grayTitle: "Vitamin A",
    grayPercent: "2%",
  },
  {
    grayTitle: "Vitamin C",
    grayPercent: "15%",
  },
];

const Container = styled(Screen)``;

// topContainer styles
const Title = styled(Text)`
  font-size: 20px;
  font-family: Uber-Bold;
`;
const MainWrapper = styled.View`
height:100%;
background-color:#ffffff;
  margin: 0 22px;`;

const TopContainerWrapper = styled.Pressable``;

const InfoTitle = styled(Text)`
  margin: 35px 0 16px;
`;
const InfoSubTitle = styled(Text)`
  margin-bottom: 19px;
`;
const Price = styled(Text)``;

const InfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

// MiddleContainer styles
const TitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 24px 0;
`;
const MainTitle = styled(Text)``;

const MiddleContainerWrapper = styled.View`
  background-color: #efeff4;
  padding: 14px;
`;

// BottomContainer styles
const BottomContainerWrapper = styled.View``;
const BottomText = styled(Text)`
  color: #6b6b6b;
  font-size: 16px;
  margin: 24px 0 13px;
`;
const CountWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;
const Note = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Count = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ItemDetails = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 500 }}>
      <Container>
        <MainWrapper>
          <TopContainerWrapper
            onPress={() => navigation.navigate(ROUTES.ORDER_SCREEN)}
          >
            <Image
              source={require("../../../assets/images/StoreImages/mainbanana.png")}
            />
            <Title>Organic Banana</Title>

            <InfoTitle>Information</InfoTitle>
            <InfoWrapper>
              <InfoSubTitle>Price</InfoSubTitle>
              <Price>$ 0.27/pc</Price>
            </InfoWrapper>
            <InfoWrapper>
              <InfoSubTitle>Price per ground Typography</InfoSubTitle>
              <Price>$1.09/lb</Price>
            </InfoWrapper>
            <InfoWrapper>
              <InfoSubTitle>Package</InfoSubTitle>
              <Price>1 banana</Price>
            </InfoWrapper>
          </TopContainerWrapper>

          <MiddleContainerWrapper>
            <MainTitle>Serving Size about 1 banana</MainTitle>
            <TitleWrapper>
              <MainTitle>Calories 110</MainTitle>
              <MainTitle>% Daily Value</MainTitle>
            </TitleWrapper>
            {data.map((item, idx) => {
              return (
                <ItemDetailsScreen
                  key={idx}
                  title={item.title}
                  percent={item.percent}
                />
              );
            })}
            {data2.map((item, idx) => {
              return (
                <ItemDetailsScreen
                  key={idx}
                  grayTitle={item.grayTitle}
                  grayPercent={item.grayPercent}
                />
              );
            })}
            <BottomText>
              * The % Daily Value (DV) tells you how much a nutrient in a
              serving of food contributes to a daily diet. 2,000 calories a day
              is used for general nutritional advice.
            </BottomText>
          </MiddleContainerWrapper>
          <BottomContainerWrapper>
            <Title style={{ marginBottom: 24 }}>Related</Title>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Image
                source={require("../../../assets/images/StoreImages/lemon.png")}
              />
              <Image
                style={{ marginHorizontal: 15 }}
                source={require("../../../assets/images/StoreImages/banana2.png")}
              />
              <Image
                style={{ marginRight: 15 }}
                source={require("../../../assets/images/StoreImages/avocado2.png")}
              />
              <Image
                source={require("../../../assets/images/StoreImages/lemon.png")}
              />
            </ScrollView>
            <CountWrapper>
              <Count>
                <Image
                  style={{ marginRight: 10 }}
                  source={require("../../../assets/images/StoreImages/Count.png")}
                />
                <Text>1pc</Text>
              </Count>
              <Note onPress={() => navigation.navigate(ROUTES.NOTE)}>
                <Image
                  source={require("../../../assets/images/StoreImages/note.png")}
                />
                <Text style={{ marginLeft: 10 }}>Leave a note</Text>
              </Note>
            </CountWrapper>
          </BottomContainerWrapper>
        </MainWrapper>
      </Container>
    </ScrollView>
  );
};

export default ItemDetails;
