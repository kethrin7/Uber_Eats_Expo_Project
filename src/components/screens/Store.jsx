import { View, ScrollView, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import * as ROUTES from "../../../src/constants/Routes";
import Screen from "../atoms/Screen";
import Search from "../atoms/TextInput";
import CtgrBtn from "../atoms/CtgrBtn";
import StoreCard from "../organisms/StoreCard";
import Text from "../atoms/Text";
import StoreCategoryCard from "../organisms/StoreCategoryCard";

// styled
const Container = styled(Screen)``;

const SortTopContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0 22px 20px 22px;
  justify-content: space-between;
`;
const CategoryCard = styled(CtgrBtn)`
  margin: 0 10px;
`;
const TitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 22px 22px 10px;
`;
const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Title = styled(Text)`
  font-size: 20px;
`;
const SubTitle = styled(Text)`
  margin-right: 10px;
`;

// Search
const SearchView = styled.View`
  padding: 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

// past order screen
const PastOrderWrapper = styled.View`
  margin: 150px 0 0;
  align-items: center;
  text-align: center;
`;
const PastOrderTitle = styled(Text)`
  font-size: 20px;
`;
const PastOrderSubTitle = styled(Text)`
  color: #6b6b6b;
  font-size: 20px;
`;

const btns = [
  { title: "Featured", value: 0 },
  { title: "Categories", value: 1 },
  { title: "Orders", value: 2 },
];

// Logic
const Store = ({ navigation }) => {
  // Data
  const Featured = [
    {
      id: 1,
      imgUrl: require("../../../assets/images/StoreImages/banana.png"),
      title: "Organic Banana",
      price: 0.27,
      quantity: "1 banana",
      FeaturedHandlePress: () => navigation.navigate(ROUTES.ITEM_DETAIL_SCREEN),
    },
    {
      id: 2,
      imgUrl: require("../../../assets/images/StoreImages/avocado.png"),
      title: "Organic Banana",
      price: 2.21,
      quantity: "1 avocado",
    },
    {
      id: 3,
      imgUrl: require("../../../assets/images/StoreImages/banana.png"),
      title: "Organic Banana",
      price: 0.27,
      quantity: "1 banana",
    },
  ];
  const Beverage = [
    {
      id: 4,
      imgUrl: require("../../../assets/images/StoreImages/beverage1.png"),
      title: "Coca-Cola Zero Sugar Cola Soda",
      price: 9.89,
      quantity: "12 x 12",
    },
    {
      id: 5,
      imgUrl: require("../../../assets/images/StoreImages/beverage2.png"),
      title: "Simply Pulp Free Orange Juice",
      price: 5.49,
      quantity: " 52 fl oz",
    },
    {
      id: 6,
      imgUrl: require("../../../assets/images/StoreImages/beverage1.png"),
      title: "Coca-Cola Zero Sugar Cola Soda",
      price: 9.89,
      quantity: "12 x 12",
    },
  ];
  const Frozen = [
    {
      id: 7,
      imgUrl: require("../../../assets/images/StoreImages/frozenfood1.png"),
      title: "T.G.I. Friday’s Boneless Chicken Bites",
      price: 10.44,
      quantity: "15 oz",
    },
    {
      id: 8,
      imgUrl: require("../../../assets/images/StoreImages/frozenfood2.png"),
      title: "Apple and Maple Froken Sausages Typography",
      price: 7.69,
      quantity: " 55 fl oz",
    },
    {
      id: 9,
      imgUrl: require("../../../assets/images/StoreImages/frozenfood1.png"),
      title: "T.G.I. Friday’s Boneless Chicken Bites",
      price: 10.44,
      quantity: "15 oz",
    },
  ];
  const groceries = [
    {
      id: 10,
      imgUrl: require("../../../assets/images/StoreImages/groceries1.png"),
      title: "CYogi  Honey Chai Turmeric...",
      price: 5.5,
      quantity: "16 tea bag",
    },
    {
      id: 11,
      imgUrl: require("../../../assets/images/StoreImages/groceries2.png"),
      title: "Pillsbury Sugarfree Chocolate...",
      price: 5.49,
      quantity: " 52 oz",
    },
    {
      id: 12,
      imgUrl: require("../../../assets/images/StoreImages/groceries3.png"),
      title: "Doritos Nacho Cheese",
      price: 2.74,
      quantity: "9.3 oz",
    },
    {
      id: 13,
      imgUrl: require("../../../assets/images/StoreImages/groceries4.png"),
      title: "Wheat Thins Sundried Tomato &...",
      price: 6.3,
      quantity: "12.6 oz",
    },
  ];
  const Categories = [
    {
      id: 14,
      imgUrl: require("../../../assets/images/StoreImages/banana.png"),
      title: "Fruits & vegetables",
      handlePress:(()=>navigation.navigate(ROUTES.ITEM_DETAIL_SCREEN))
    },
    {
      id: 15,
      imgUrl: require("../../../assets/images/StoreImages/beverage1.png"),
      title: "Beverages",
    },
    {
      id: 16,
      imgUrl: require("../../../assets/images/StoreImages/frozenfood1.png"),
      title: "Frozen Food",
    },
    {
      id: 17,
      imgUrl: require("../../../assets/images/StoreImages/beverage2.png"),
      title: "Pantry & Groceries",
    },
    {
      id: 18,
      imgUrl: require("../../../assets/images/StoreImages/groceries2.png"),
      title: "Snacks",
    },
    {
      id: 19,
      imgUrl: require("../../../assets/images/StoreImages/groceries3.png"),
      title: "Meat, Seafood & Plant-Bas...",
    },
    {
      id: 20,
      imgUrl: require("../../../assets/images/StoreImages/groceries1.png"),
      title: "Cheese",
    },
    {
      id: 21,
      imgUrl: require("../../../assets/images/StoreImages/beverage1.png"),
      title: "Bread",
    },
      {
    imgUrl: require("../../../assets/images/StoreImages/banana.png"),
    title: "Fruits & vegetables",
  },
  {
    imgUrl: require("../../../assets/images/StoreImages/beverage1.png"),
    title: "Beverages",
  },
  {
    imgUrl: require("../../../assets/images/StoreImages/frozenfood1.png"),
    title: "Frozen Food",
  },
  {
    imgUrl: require("../../../assets/images/StoreImages/beverage2.png"),
    title: "Pantry & Groceries",
  },
  {
    imgUrl: require("../../../assets/images/StoreImages/groceries2.png"),
    title: "Snacks",
  },
  {
    imgUrl: require("../../../assets/images/StoreImages/groceries3.png"),
    title: "Meat, Seafood & Plant-Bas...",
  },
  {
    imgUrl: require("../../../assets/images/StoreImages/groceries1.png"),
    title: "Cheese",
  },
  {
    imgUrl: require("../../../assets/images/StoreImages/beverage1.png"),
    title: "Bread",
  },
  ];
  const Orders = [
    {
      id: 9,
      imgUrl: require("../../../assets/images/DealScreenImages/offers6.png"),
      title: "Organic Banana",
      price: 1,
      quantity: "1 banana",
    },
    // Add more order items...
  ];
  
  const [ctgr, setCtgr] = useState(0);
  const [data, setData] = useState([]);

  const fetchData = () => {
    if (ctgr === 0) {
      setData(Featured);
    } else if (ctgr === 1) {
      setData(Categories);
    } else {
      setData(Orders);
    }
  };

  useEffect(() => {
    fetchData();
  }, [ctgr]);

  const handlePress = (value) => {
    setCtgr(value);
  };

  return (
    <Container>
      <SearchView>
        <Search />
      </SearchView>

      <TitleWrapper>
        <Wrapper>
          <Image
            style={{ marginRight: 5 }}
            source={require("../../../assets/images/StoreImages/clock.png")}
          />
          <Title>In 60 minutes</Title>
        </Wrapper>
        <Wrapper>
          <Image
            style={{ marginRight: 5 }}
            source={require("../../../assets/images/StoreImages/dollar.png")}
          />
          <Title>Pricing and Fees</Title>
        </Wrapper>
      </TitleWrapper>

      <SortTopContainer>
        {btns.map((item, idx) => (
          <CategoryCard
            key={idx}
            title={item.title}
            onPress={() => handlePress(item.value)}
            light={item.value === ctgr ? false : true}
          />
        ))}
      </SortTopContainer>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsHorizontalScrollIndicator={false}
      >
        {ctgr === 0 ? (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image
              style={{ marginHorizontal: 10 }}
              source={require("../../../assets/images/StoreImages/topphoto.png")}
            />
            <Image
              style={{ marginHorizontal: 10 }}
              source={require("../../../assets/images/StoreImages/topphoto.png")}
            />
            <Image
              style={{ marginHorizontal: 10 }}
              source={require("../../../assets/images/StoreImages/topphoto.png")}
            />
          </ScrollView>
        ) : null}

        {ctgr === 0 ? (
          <>
            <TitleWrapper style={{ marginTop: 22 }}>
              <Title style={{ fontFamily: "Uber-Bold" }}>
                Fruits & Vegetables
              </Title>
              <Wrapper>
                <SubTitle>see all</SubTitle>
                <Image
                  source={require("../../../assets/images/StoreImages/arrow.png")}
                />
              </Wrapper>
            </TitleWrapper>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {data.map((item, idx) => (
                <StoreCard
                  key={idx}
                  image={item.imgUrl}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  onPress={item.FeaturedHandlePress}
                />
              ))}
            </ScrollView>

            <TitleWrapper style={{ marginTop: 22 }}>
              <Title style={{ fontFamily: "Uber-Bold" }}>Beverage</Title>
              <Wrapper>
                <SubTitle>see all</SubTitle>
                <Image
                  source={require("../../../assets/images/StoreImages/arrow.png")}
                />
              </Wrapper>
            </TitleWrapper>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {Beverage.map((item, idx) => (
                <StoreCard
                  key={idx}
                  image={item.imgUrl}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </ScrollView>

            <TitleWrapper style={{ marginTop: 22 }}>
              <Title style={{ fontFamily: "Uber-Bold" }}>Frozen Foods</Title>
              <Wrapper>
                <SubTitle>see all</SubTitle>
                <Image
                  source={require("../../../assets/images/StoreImages/arrow.png")}
                />
              </Wrapper>
            </TitleWrapper>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {Frozen.map((item, idx) => (
                <StoreCard
                  key={idx}
                  image={item.imgUrl}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </ScrollView>

            <TitleWrapper style={{ marginTop: 22 }}>
              <Title style={{ fontFamily: "Uber-Bold" }}>
                Pantry & Groceries
              </Title>
              <Wrapper>
                <SubTitle>see all</SubTitle>
                <Image
                  source={require("../../../assets/images/StoreImages/arrow.png")}
                />
              </Wrapper>
            </TitleWrapper>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {groceries.map((item, idx) => (
                <StoreCard
                  key={idx}
                  image={item.imgUrl}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </ScrollView>
          </>
        ) : null}
        {ctgr === 1 ? (
          <ScrollView>
            {Categories.map((item, idx) => (
              <StoreCategoryCard
                key={idx}
                image={item.imgUrl}
                title={item.title}
              />
            ))}
          </ScrollView>
        ) : null}

        {ctgr === 2 ? (
          <PastOrderWrapper>
            <PastOrderTitle>No recent orders</PastOrderTitle>
            <PastOrderSubTitle>
              Your recent orders will appear here.
            </PastOrderSubTitle>
          </PastOrderWrapper>
        ) : null}
      </ScrollView>
    </Container>
  );
};
export default Store;
