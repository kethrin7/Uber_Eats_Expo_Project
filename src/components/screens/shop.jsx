import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Image, View } from "react-native";
import styled from "styled-components";

import CtgrBtn from "../atoms/CtgrBtn";
import Screen from "../atoms/Screen";
import ShopCard from "../organisms/ShopCard";
import Text from "../atoms/Text";

const ShopCardData = [
  {
    id: 0,
    title: "Begs & Megs",
    subtitle: "1 item • US$43.00",
    desc: "Deliver to San Franciscao Bay Area",
    image: require("../../../assets/images/ShopScreenImages/shopcarddata.png"),
  },
  {
    id: 1,
    title: "Taco Bell",
    subtitle: "1 item • US 43$",
    desc: "Deliver to San Franciscao Bay Area",
    image: require("../../../assets/images/ShopScreenImages/shopcarddata2.png"),
  },
  {
    id: 3,
    title: "Tako bell",
    subtitle: "1 item • US 43$",
    desc: "Deliver to San Franciscao Bay Area",
    image: require("../../../assets/images/ShopScreenImages/shopcarddata.png"),
  },
  {
    id: 4,
    title: "Tako bell",
    subtitle: "1 item • US 43$",
    desc: "Deliver to San Franciscao Bay Area",
    image: require("../../../assets/images/ShopScreenImages/shopcarddata2.png"),
  },
  {
    id: 5,
    title: "Tako bell",
    subtitle: "1 item • US 43$",
    desc: "Deliver to San Franciscao Bay Area",
    image: require("../../../assets/images/ShopScreenImages/shopcarddata.png"),
  },
];

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
  font-family: UberMoveMedium;
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

const Shop = () => {
  const [data, setData] = useState(ShopCardData);

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
          <SubTitle>
            Once you add items from a restaurant or store, your basket will
            appear here.
          </SubTitle>
          <StartBtn title="Start Shopping"/>
        </InnerContainer>
      ) : (
        <CardWrapper>
          <CardsContainer>
            {ShopCardData.map((item) => (
              <ShopCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                desc={item.desc}
                image={item.image}
                onPress={() => console.log(item.title)}
              />
            ))}
          </CardsContainer>
        </CardWrapper>
      )}
      <OrderBtn title="Orders" iconLeft={imageUrl} light/>
    </Container>
  );
};

export default Shop;
