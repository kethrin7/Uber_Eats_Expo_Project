// import { View } from "react-native";
// import React from "react";
// import Button from "../atoms/Button";

// import Text from "../atoms/Text";

// const ForgotPassword = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>FORGOT PASSWORD</Text>
//       <Button title="Go Back" onPress={() => navigation.goBack()} />
//       <Button title="Go Shop" onPress={() => navigation.navigate("Shop")} />
//     </View>
//   );
// };

// export default ForgotPassword;

import { ScrollView, View, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import styled from "styled-components";
import MapView, { Marker } from "react-native-maps";

import * as ROUTES from "../../../src/constants/Routes";
import DeliveryDetailsCard from "../organisms/DeliveryDetailsCard";
import Screen from "../atoms/Screen";
import Text from "../atoms/Text";

const Container = styled(Screen)``;
const TitleWrapper = styled.View`
  margin: 0 22px;
`;
const Title = styled(Text)`
  font-size: 18px;
`;

const MainTitle = styled(Text)`
  font-size: 24px;
  margin: 20px 0 8px 0;
`;
const Subtitle = styled(Text)``;

const DeliveryTime = styled.View`
  display: flex;
  flex-direction: row;
  margin: 15px 22px;
  justify-content: space-between;
`;
const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0 22px 80px 22px;
`;
const DriverInfoWrapper = styled.View`
  margin: 80px 22px 0 22px;
  flex-direction: row;
  align-items: center;
`;
const ImageCont = styled.View`
  flex-direction: row;
`;
const ContactToDriver = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 22px 15px 22px;
`;
const CarDetailsView = styled.View``;

const PhoneWrapper = styled.View`
  background-color: #eeeeee;
  border-radius: 50px;
  width: 50px;
  padding: 15px;
  align-items: center;
`;
const MessageWrapper = styled.View`
  background-color: #eeeeee;
  border-radius: 50px;
  width: 190px;
  padding: 15px;
  align-items: center;
`;
const TipWrapper = styled.View`
  background-color: #eeeeee;
  border-radius: 50px;
  width: 84px;
  padding: 15px;
  align-items: center;
  flex-direction: row;
`;

const Map = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 400 }}>
      <Container>
        <TitleWrapper>
          <MainTitle>Almost there...</MainTitle>
          <Subtitle>Arriving at 10:15</Subtitle>
        </TitleWrapper>
        <DeliveryTime>
          <Image
            source={require("../../../assets/images/DeliveryImages/greenline.png")}
          />
          <Image
            source={require("../../../assets/images/DeliveryImages/greenline.png")}
          />
          <Image
            source={require("../../../assets/images/DeliveryImages/greenline.png")}
          />
          <Image
            source={require("../../../assets/images/DeliveryImages/greenline.png")}
          />
          <Image
            source={require("../../../assets/images/DeliveryImages/grayline.png")}
          />
        </DeliveryTime>

        <Wrapper>
          <Subtitle style={{ marginRight: 5 }}>
            Latest arrival by 10:40
          </Subtitle>
          <Image
            source={require("../../../assets/images/DeliveryImages/!.png")}
          />
        </Wrapper>

        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 41.716667,
              longitude: 44.783333,
              latitudeDelta: 0.15,
              longitudeDelta: 0.15,
            }}
          >
            <Marker
              coordinate={{
                latitude: 41.720287,
                longitude: 44.770614,
              }}
              title="Restaurant"
              description="Gourmet Burger Kitchen GBK"
              draggable
            >
              <Image
                style={{ width: 35, height: 35 }}
                source={require("../../../assets/images/DeliveryImages/cutlery.png")}
              />
            </Marker>
            <Marker
              coordinate={{
                latitude: 41.70889,
                longitude: 44.81137,
              }}
              title="Restaurant"
              description="Broken Mush Pizza"
              draggable
            >
              <Image
                style={{ width: 35, height: 35 }}
                source={require("../../../assets/images/DeliveryImages/cutlery.png")}
              />
            </Marker>
          </MapView>
        </View>

        <DriverInfoWrapper>
          <View>
            <ImageCont style={{ alignItems: "center" }}>
              <Image
                source={require("../../../assets/images/DeliveryImages/driver.png")}
              />
              <Image
                source={require("../../../assets/images/DeliveryImages/car.png")}
              />
            </ImageCont>
            <View
              style={{
                flexDirection: "row",
                borderRadius: 50,
                width: 80,
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text style={{ marginHorizontal: 5 }}>95%</Text>
              <Image
                source={require("../../../assets/images/DeliveryImages/like.png")}
              />
            </View>
          </View>

          <CarDetailsView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginLeft: 20,
                marginBottom: 5,
              }}
            >
              <Image
                source={require("../../../assets/images/DeliveryImages/greenman.png")}
              />
              <Title style={{ color: "#34A853" }}>Jonathan </Title>
              <Title>• 7EL005</Title>
            </View>
            <Subtitle
              style={{
                marginLeft: 20,
                marginBottom: 5,
              }}
            >
              White Honda Civic
            </Subtitle>
          </CarDetailsView>
        </DriverInfoWrapper>

        <ContactToDriver
          onPress={() => navigation.navigate(ROUTES.FINISH_DELIVERY)}
        >
          <PhoneWrapper>
            <Image
              source={require("../../../assets/images/DeliveryImages/phone.png")}
            />
          </PhoneWrapper>
          <MessageWrapper>
            <Title>Send a message</Title>
          </MessageWrapper>
          <TipWrapper>
            <Image
              source={require("../../../assets/images/DeliveryImages/Tip.png")}
            />
            <Title style={{ marginLeft: 5 }}>Tip</Title>
          </TipWrapper>
        </ContactToDriver>
        <DeliveryDetailsCard />
      </Container>
    </ScrollView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: 370,
  },
});
