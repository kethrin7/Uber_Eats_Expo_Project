import { Text, View,  } from "react-native";
import React from "react";
import styled from "styled-components";

import * as ROUTES from "../../../src/constants/Routes";
import BrowseCard from "../atoms/BrowseCard";
import Screen from "../atoms/Screen";
import { ScrollView } from "react-native-gesture-handler";
import Search from "../atoms/TextInput";

const Container = styled(Screen)`
  background-color: #ffffff;
`;

const InnerContainer = styled.View`
  padding: 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 15px;
`;

function Browse({navigation}){

const offerList = [
  {
    id: 1,
    title: "Breakfast & Brunch",
    imgUrl: require("../../../assets/images/BrowseImages/1.png"),
  },
  {
    id: 2,
    title: "Coffee & Tea",
    imgUrl: require("../../../assets/images/BrowseImages/2.png"),
  },
  {
    id: 3,
    title: "Deals",
    imgUrl: require("../../../assets/images/BrowseImages/3.png"),
    handlePress: () => navigation.navigate(ROUTES.DEALS_SCREEN, { page: 1 }),
  },
  {
    id: 4,
    title: "Restaurant Rewards",
    imgUrl: require("../../../assets/images/BrowseImages/4.png"),
    handlePress: () => navigation.navigate(ROUTES.DEALS_SCREEN, { page: 2 }),
  },
  {
    id: 5,
    title: "Best Overall",
    imgUrl: require("../../../assets/images/BrowseImages/5.png"),
  },
  {
    id: 6,
    title: "Shipped free",
    imgUrl: require("../../../assets/images/BrowseImages/6.png"),
  },
];

const browseList = [
  {
    id: 1,
    title: "Mexican",
    imgUrl: require("../../../assets/images/BrowseImages/7.png"),
  },
  {
    id: 2,
    title: "Fast food",
    imgUrl: require("../../../assets/images/BrowseImages/8.png"),
  },
  {
    id: 3,
    title: "Healthy",
    imgUrl: require("../../../assets/images/BrowseImages/9.png"),
  },
  {
    id: 4,
    title: "Pizza",
    imgUrl: require("../../../assets/images/BrowseImages/10.png"),
  },
  {
    id: 5,
    title: "Asian",
    imgUrl: require("../../../assets/images/BrowseImages/11.png"),
  },
  {
    id: 6,
    title: "Bakery",
    imgUrl: require("../../../assets/images/BrowseImages/12.png"),
  },
  {
    id: 7,
    title: "Bakery",
    imgUrl: require("../../../assets/images/BrowseImages/13.png"),
  },
  {
    id: 8,
    title: "Sandwich",
    imgUrl: require("../../../assets/images/BrowseImages/14.png"),
  },
  {
    id: 9,
    title: "Sushi",
    imgUrl: require("../../../assets/images/BrowseImages/15.png"),
  },
  {
    id: 10,
    title: "Korean",
    imgUrl: require("../../../assets/images/BrowseImages/16.png"),
  },
  {
    id: 11,
    title: "Juice & Smoothies",
    imgUrl: require("../../../assets/images/BrowseImages/17.png"),
  },
  {
    id: 12,
    title: "Vietnamese",
    imgUrl: require("../../../assets/images/BrowseImages/6.png"),
  },
  {
    id: 13,
    title: "Bubblee Tea",
    imgUrl: require("../../../assets/images/BrowseImages/19.png"),
  },
  {
    id: 14,
    title: "Burgers",
    imgUrl: require("../../../assets/images/BrowseImages/20.png"),
  },
];

  return (
    <Container>
      <ScrollView>
        <Search/>
        <Title style={{ marginTop: 15, marginLeft: 22 }}>Top Categories</Title>
        <InnerContainer>
          {offerList.map((item) => {
            return (
              <BrowseCard
                key={item.id}
                title={item.title}
                imgUrl={item.imgUrl}
                onPress={item.handlePress}
              />
            );
          })}
        </InnerContainer>
        <Title style={{marginLeft: 22 }}>All Categories</Title>
        <InnerContainer>
          {browseList.map((item) => {
            return (
              <BrowseCard
                key={item.id}
                title={item.title}
                imgUrl={item.imgUrl}
                onPress={() => console.log(item.title)}
              />
            );
          })}
        </InnerContainer>
      </ScrollView>
    </Container>
  );
};

export default Browse;
