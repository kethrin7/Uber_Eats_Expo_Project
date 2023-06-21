import { Text, View } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";

import * as ROUTES from "../../../src/constants/Routes";
import { ScrollView } from "react-native-gesture-handler";
import BrowseCard from "../atoms/BrowseCard";
import Screen from "../atoms/Screen";
import Search from "../atoms/TextInput";
import IconTitle from "../atoms/IconTitle";
import SearchInput from "../atoms/SearchInput";

const Container = styled(Screen)`
  background-color: #ffffff;
`;
const SearchView = styled.View`
  padding: 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const InnerContainer = styled.View`
  /* padding: 22px; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const SearchContainer = styled.View`
  width: 100%;
  margin-bottom: 27px;
`;
const Title = styled.Text`
  font-family: Uber-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 15px;
`;
const SearchTitle = styled.Text`
  font-family: Uber-Medium;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6b6b6b;
  margin-bottom: 21px;
`;

const Wrapper = styled.View`
  /* margin: 0 22px; */
`;

function Browse({ navigation }) {
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

  const [search, setSearch] = useState(true);
  const [value, setValue] = useState(``);
  const [recents, setRecents] = useState([]);

const LimitSearch = 5;

const handleBlur = () => {
  if (value && !recents.includes(value)) {
    let updatedRecents = [value, ...recents.slice(0, LimitSearch - 1)];
    setRecents(updatedRecents);
  }
   setValue("");
};

  return (
    <Container>
      <ScrollView>
        <SearchInput
          value={value}
          onChangeText={(text) => setValue(text)}
          onFocus={() => setSearch(true)}
          onBlur={handleBlur}
        />
        {!search ? (
          <Wrapper>
            <SearchContainer>
              <SearchTitle style={{ marginTop: 20 }}>
                Recent Searches
              </SearchTitle>
              {recents.map((item, idx) => {
                return (
                  <IconTitle
                    key={item.id}
                    title={item}
                    icon={<FontAwesome name="search" size={24} color="black" />}
                    onPress={() => console.log(item.title)}
                  />
                );
              })}
            </SearchContainer>
            <SearchContainer>
              <SearchTitle>Top Categories</SearchTitle>
              {browseList.map((item) => {
                return (
                  <IconTitle
                    key={item.id}
                    title={item.title}
                    icon={<FontAwesome name="search" size={24} color="black" />}
                    onPress={() => console.log(item.title)}
                  />
                );
              })}
            </SearchContainer>
          </Wrapper>
        ) : (
          <Wrapper>
            <Title style={{ marginTop: 15, marginLeft: 22 }}>
              Top Categories
            </Title>
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
            <Title style={{ marginLeft: 22 }}>All Categories</Title>
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
          </Wrapper>
        )}
      </ScrollView>
    </Container>
  );
}

export default Browse;
