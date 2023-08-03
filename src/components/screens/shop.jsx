import React, { useEffect, useState } from "react";
import { LogBox, Pressable, ScrollView } from "react-native";
import { Image, View } from "react-native";
import styled from "styled-components";

import * as ROUTES from "../../constants/Routes";
import CtgrBtn from "../atoms/CtgrBtn";
import Screen from "../atoms/Screen";
import ShopCard from "../organisms/ShopCard";
import Text from "../atoms/Text";
import { ShopItems } from "../../constants/UserProvider";

const Container = styled(Screen)``;
const imageUrl = require("../../../assets/images/ShopScreenImages/icon.png");

const InnerContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 22px;
`;

const CardsContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  padding: 0 22px;
`;

const CardWrapper = styled.ScrollView``;

const StartBtn = styled(CtgrBtn)`
  margin-top: 38px;
`;

const OrderBtn = styled(CtgrBtn)`
  position: absolute;
  right: 17px;
  top: 73px;
`;

const Title = styled(Text)`
  font-size: 20px;
  align-items: center;
`;

const SubTitle = styled(Text)`
  font-size: 16px;
  padding: 0 15px;
  color: #545454;
  text-align: center;
`;

const MainTitleView = styled.View``;
const MainTitle = styled.Text`
  font-family: Uber-Medium;
  position: absolute;
  top: 50px;
  left: 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
  width: 100%;
`;

const Shop = ({ navigation }) => {
  const [data, setData] = useState([]);
  let shopItems = ShopItems();
  console.log("this is ", shopItems);

  const testUrl = require("../../../assets/images/ShopScreenImages/shopcarddata.png");

  setTimeout(() => {
    setData(shopItems);
  }, 1000);

  return (
    <Container>
      <MainTitleView>
        <MainTitle>Carts</MainTitle>
      </MainTitleView>
      {!data ? (
        <InnerContainer>
          <Image
            source={require("../../../assets/images/ShopScreenImages/shopcardimage.png")}
          />
          <Title>Add items to start a basket</Title>
          <SubTitle>items in cart {data.length}</SubTitle>
          <SubTitle>
            Once you add items from a restaurant or store, your basket will
            appear here.
          </SubTitle>
          <StartBtn
            title="Start Shopping"
            onPress={() => navigation.navigate(ROUTES.HOME_SCREEN)}
          />
        </InnerContainer>
      ) : (
        <CardWrapper>
          <CardsContainer>
            {data.map((item, idx) => (
              <ShopCard
                key={idx}
                title={item.title}
                subtitle={item.price}
                desc={item.desc}
                image={item.image}
                onPress={() =>
                  navigation.navigate(ROUTES.ORDERS_DETAILS_SCREEN)
                }
              />
            ))}
          </CardsContainer>
        </CardWrapper>
      )}
      <OrderBtn
        title="Orders"
        iconLeft={imageUrl}
        light
        onPress={() => navigation.navigate(ROUTES.HOME_SCREEN)}
      />
    </Container>
  );
};

export default Shop;
