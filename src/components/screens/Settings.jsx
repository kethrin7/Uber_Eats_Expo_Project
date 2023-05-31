import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { ScrollView } from "react-native-gesture-handler";

import * as ROUTES from "../../constants/Routes";
import Screen from "../atoms/Screen";
import SettingCard from "../organisms/SettingCard";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

const Container = styled(Screen)`
  flex: 1;
  justify-content: space-around;
`;

const UserCard = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height:55px;
  margin-bottom:11px;
  margin-top:10px;
`;

const UserImage = styled.Image`
  margin-left: 15px;
`;

const UserName = styled(Text)`
  margin-left: 22px;
`;

const Cards = [
  {
    title: "Orders",
    image: require("../../../assets/images/SettingImages/Orders.png"),
  },
  {
    title: "Your Favorites",
    image: require("../../../assets/images/SettingImages/Favorite.png"),
  },
  {
    title: "Restaurant Rewards",
    value:ROUTES.DEALS_SCREEN,
    image: require("../../../assets/images/SettingImages/RestaurantRewards.png"),
  },
  {
    title: "Wallet",
    image: require("../../../assets/images/SettingImages/Wallet.png"),
  },
  {
    title: "Send a gift",
    image: require("../../../assets/images/SettingImages/Gift.png"),
  },
  {
    title: "Business Preferences",
    image: require("../../../assets/images/SettingImages/Business.png"),
    subTitle: "Make work meals quicker and easier",
  },
  {
    title: "Help",
    image: require("../../../assets/images/SettingImages/Help.png"),
  },
  {
    title: "Promotion",
    image: require("../../../assets/images/SettingImages/Promotion.png"),
  },
  {
    title: "Uber Pass",
    image: require("../../../assets/images/SettingImages/Uberpass.png"),
    subTitle: "Join free for 1 month",
  },
  {
    title: "Deliver with Uber",
    image: require("../../../assets/images/SettingImages/Delivery.png"),
  },
  {
    title: "Settings",
    value:ROUTES.SETTINGS_DETAILS,
    image: require("../../../assets/images/SettingImages/Settings.png"),
  },
];


const Settings = ({ navigation }) => {
const handlePress = (value) => {
  navigation.navigate(value, { page: 2 });
};

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <UserCard>
          <UserImage
            source={require("../../../assets/images/SettingImages/User.png")}
          />
          <UserName>John Doe</UserName>
        </UserCard>
        {Cards.map((card, idx) => {
          return (
            <SettingCard
              key={idx}
              title={card.title}
              image={card.image}
              onPress={() => handlePress(card.value)}
              subTitle={card.subTitle}
            />
          );
        })}
        <Text style={{ marginLeft: 22, marginTop:15,fontFamily:"UberMoveMedium"
 }}>About</Text>
      </ScrollView>
    </Container>
  );
};

export default Settings;
