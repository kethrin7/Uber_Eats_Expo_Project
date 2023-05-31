import React from "react";
import { Image, View, Pressable } from "react-native";
import styled from "styled-components";

import * as ROUTES from "../../../src/constants/Routes";
import Screen from "../atoms/Screen";
import Text from "../atoms/Text";

const Container = styled(Screen)``;

const DeliveryDetailsWrapper = styled.View`
  margin: 0 22px 30px 22px;
`;
const MainTitle = styled(Text)`
  font-size: 25px;
  margin: 20px 0 35px 0;
`;
const SubTitle = styled(Text)`
line-height:24px`;

const AdditionalWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 143px 22px;
`;
const NextView = styled.Pressable`
  background-color: #000000;
  padding: 15px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 16px 22px 0 22px;
`;

const FinishDelivery = ({ navigation }) => {
  return (
    <Container>
      <DeliveryDetailsWrapper>
        <MainTitle>Enjoy your order</MainTitle>
        <SubTitle>
          BJonathan and Subway (Warriors Arena Road) worked their magic for you.
          Take a minute to rate, tip, and say thanks.
        </SubTitle>
      </DeliveryDetailsWrapper>

      <AdditionalWrapper>
        <Image
          style={{ width: 205 }}
          source={require("../../../assets/images/DeliveryImages/finishDelivery.png")}
        />
      </AdditionalWrapper>

      <NextView onPress={() => navigation.navigate(ROUTES.HOME_SCREEN)}>
        <Text style={{ color: "#ffffff" }}>Close</Text>
      </NextView>
    </Container>
  );
};

export default FinishDelivery;
