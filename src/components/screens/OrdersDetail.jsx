import { ScrollView, View } from "react-native";
import React from "react";
import styled from "styled-components";
import Screen from "../atoms/Screen";
import Text from "../atoms/Text";
import Promotion from "../molecules/Promotion";
import RadioLabel from "../molecules/RadioLabel";

const Container = styled(Screen)``;

const RestaurantTitle = styled(Text)``;

const ItemPrice = styled(Text)`
  margin: 8px 0;
`;

const ItemDesc = styled(Text)`
  color: #545454;
  margin-bottom: 36px;
`;

const SauceContainer = styled.View``;
const OrdersDetails = ({ route }) => {
  console.log(route.params);
  
  const { restaurantName, price, desc } = route.params;
  return (
    <Container>
      <ScrollView>
        <RestaurantTitle size={26}>{restaurantName}</RestaurantTitle>
        <ItemPrice size={22}>$ {price}</ItemPrice>
        <ItemDesc>{desc}</ItemDesc>
        <Promotion />
        <SauceContainer>
          <RadioLabel label="qetuna"/>
        </SauceContainer>
      </ScrollView>
    </Container>
  );
};

export default OrdersDetails;
