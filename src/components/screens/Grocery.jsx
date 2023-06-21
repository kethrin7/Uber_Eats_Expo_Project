import { View, ScrollView, Image } from "react-native";
import React from "react";
import styled from "styled-components";

import * as ROUTES from "../../../src/constants/Routes";
import Screen from "../atoms/Screen";
import GroceryCard from "../organisms/GroceryCard";
import Search from "../atoms/TextInput";
import Text from "../atoms/Text";

const Container = styled(Screen)``;

const SearchView = styled.View`
  padding: 22px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 22px;
`;

const InnerContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`;

const Card = styled(GroceryCard)`
  margin-bottom: 16px;
`;
const CardContainer = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin:0 22px 15px 22px;
  padding: 10px;
`;
const InfoContainer = styled.View`
  flex-direction: row;
`;
const TitleView = styled.View`
  margin-left: 20px;
`;
const Title = styled(Text)`
  font-size: 18px;
`;
const Subtitle = styled(Text)`
  color: #6b6b6b;
  font-size: 16px;
`;

const groseryShop = [
  {
    imgUrl: require("../../../assets/images/GroceryImages/logo1.png"),
    color: "#F60000",
    deliveryTime: "60",
  },
  {
    imgUrl: require("../../../assets/images/GroceryImages/logo2.png"),
    color: "#77A240",
    deliveryTime: "20",
  },
  {
    imgUrl: require("../../../assets/images/GroceryImages/logo3.png"),
    color: "#E4AE3C",
    deliveryTime: "30",
  },
  {
    imgUrl: require("../../../assets/images/GroceryImages/logo4.png"),
    color: "#B71234",
    deliveryTime: "25",
  },
  {
    imgUrl: require("../../../assets/images/GroceryImages/logo5.png"),
    color: "#AB0920",
    deliveryTime: "45",
  },
  {
    imgUrl: require("../../../assets/images/GroceryImages/logo6.png"),
    color: "#D2202F",
    deliveryTime: "35",
  },
];

const Grocery = ({ navigation }) => {
  return (
    <Container>
      <SearchView>
        <Search />
      </SearchView>

      <CardContainer>
        <InfoContainer>
          <Image
            source={require("../../../assets/images/GroceryImages/location.png")}
          />
          <TitleView>
            <Title>San Francisco Bay Area</Title>
            <Subtitle>John’s List</Subtitle>
          </TitleView>
        </InfoContainer>
        <Image
          source={require("../../../assets/images/GroceryImages/arrow.png")}
        />
      </CardContainer>

      <InnerContainer>
        {groseryShop.map((item, idx) => {
          return (
            <Card
              key={idx}
              color={item.color}
              imgUrl={item.imgUrl}
              deliveryTime={item.deliveryTime}
              onPress={() => navigation.navigate(ROUTES.STORE_SCREEN)}
            />
          );
        })}
      </InnerContainer>
    </Container>
  );
};

export default Grocery;
