import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import MainCard from "../organisms/MainCard";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Screen from "../../components/atoms/Screen";
import styled from "styled-components";
import CtgrBtn from "../atoms/CtgrBtn";
import * as ROUTES from "../../../src/constants/Routes";
import { Portal } from "react-native-portalize";
import BottomSheet from "../atoms/BottomSheet";
import Button from "../atoms/Button";
import { useRef } from "react";

const DeliveryList = [
  {
    id: 0,
    imgUrl: require("../../../assets/images/photo1.png"),
    title: "BBN inn",
    price: "3",
    deliveryTime: "10-25",
    rating: 4.9,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 1,
    imgUrl: require("../../../assets/images/photo2.png"),
    title: "Gourmet Burger Kitchen GBK",
    price: "0.70",
    deliveryTime: "10-25",
    rating: 4.4,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 2,
    imgUrl: require("../../../assets/images/photo3.png"),
    title: "African Flavour",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.5,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 3,
    imgUrl: require("../../../assets/images/photo4.png"),
    title: "Cardinal Chips",
    price: "0.50",
    deliveryTime: "10-25",
    rating: 4.1,
    promotion: true,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 4,
    imgUrl: require("../../../assets/images/photo5.png"),
    title: "Scents Restaurant",
    price: "0.60",
    deliveryTime: "10-25",
    rating: 4.3,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 5,
    imgUrl: require("../../../assets/images/photo6.png"),
    title: "Steaky treats",
    price: "0.55",
    deliveryTime: "10-25",
    rating: 4.7,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 6,
    imgUrl: require("../../../assets/images/photo7.png"),
    title: "Foodilistica",
    price: "0.33",
    deliveryTime: "10-25",
    rating: 5,
    promQuantity: 5,
    promPrice: 8,
  },
];
const PickupList = [
  {
    id: 0,
    imgUrl: require("../../../assets/images/photo1.png"),
    title: "BBN inn",
    price: "3",
    deliveryTime: "10-25",
    rating: 4.9,
    promQuantity: 5,
    promPrice: 8,
    distance: 3.4,
  },
  {
    id: 1,
    imgUrl: require("../../../assets/images/photo2.png"),
    title: "Gourmet Burger Kitchen GBK",
    price: "0.70",
    deliveryTime: "10-25",
    rating: 4.4,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 2,
    imgUrl: require("../../../assets/images/photo3.png"),
    title: "African Flavour",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.8,
    promQuantity: 5,
    promPrice: 8,
    distance: 6.7,
  },
  {
    id: 3,
    imgUrl: require("../../../assets/images/photo4.png"),
    title: "Cardinal Chips",
    price: "0.50",
    deliveryTime: "10-25",
    rating: 4.5,
    promotion: true,
    promQuantity: 5,
    promPrice: 8,
    distance: 2.4,
  },
  {
    id: 4,
    imgUrl: require("../../../assets/images/photo5.png"),
    title: "Scents Restaurant",
    price: "0.60",
    deliveryTime: "10-25",
    rating: 4.3,
    promQuantity: 5,
    promPrice: 8,
    distance: 4.4,
  },
  {
    id: 5,
    imgUrl: require("../../../assets/images/photo6.png"),
    title: "Steaky treats",
    price: "0.55",
    deliveryTime: "10-25",
    rating: 4.7,
    promQuantity: 5,
    promPrice: 8,
    distance: 5,
  },
  {
    id: 6,
    imgUrl: require("../../../assets/images/photo7.png"),
    title: "Foodilistica",
    price: "0.33",
    deliveryTime: "10-25",
    rating: 5,
    promQuantity: 5,
    promPrice: 8,
    distance: 6.1,
  },
];
const DineinList = [
  {
    id: 0,
    imgUrl: require("../../../assets/images/photo1.png"),
    title: "BBN inn",
    price: "3",
    deliveryTime: "10-25",
    rating: 4.9,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 1,
    imgUrl: require("../../../assets/images/photo2.png"),
    title: "Gourmet Burger Kitchen GBK",
    price: "0.70",
    deliveryTime: "10-25",
    rating: 4.4,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 2,
    imgUrl: require("../../../assets/images/photo3.png"),
    title: "African Flavour",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.8,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 3,
    imgUrl: require("../../../assets/images/photo4.png"),
    title: "Cardinal Chips",
    price: "0.50",
    deliveryTime: "10-25",
    rating: 4.5,
    promotion: true,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 4,
    imgUrl: require("../../../assets/images/photo5.png"),
    title: "Scents Restaurant",
    price: "0.60",
    deliveryTime: "10-25",
    rating: 4.3,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 5,
    imgUrl: require("../../../assets/images/photo6.png"),
    title: "Steaky treats",
    price: "0.55",
    deliveryTime: "10-25",
    rating: 4.7,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 6,
    imgUrl: require("../../../assets/images/photo7.png"),
    title: "Foodilistica",
    price: "0.33",
    deliveryTime: "10-25",
    rating: 5,
    promQuantity: 5,
    promPrice: 8,
  },
];

const MarginRight=styled.View`
  margin-right:20px;
`
const Container = styled(Screen)`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding: 20px 20px 0 20px;
  background-color: #ffffff;
`;
const InnerContainer = styled.ScrollView``;

HeaderComponent = () => {
  return <View style={{ height: 300 }}></View>;
};
const SortContainer = styled.View``;
const SortTopContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding-top: 30px;
`;

const SortBottomContainer = styled.View`
  height: 25px;
  margin: 20px 0;
  display: flex;
  align-items: center;
`;

const Location = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  align-items: center;
  line-height: 23px;
  color: #000000;
`;

const CategoryBtn = styled(CtgrBtn)`
  margin-right: 15px;
`;

function Home({ navigation }) {
  const [ctgr, setCtgr] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const categorySheetRef = useRef();

  const fetchData = () => {
    if (ctgr === 0) {
      setData(DeliveryList);
    } else if (ctgr === 1) {
      setData(PickupList);
    } else {
      setData(DineinList);
    }
  };
  const handlePress = (value) => {
    setCtgr(value);
  };

  const btns = [
    { title: "Delivery", value: 0 },
    { title: "Pickup", value: 1 },
    { title: "Dine-In", value: 2 },
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchData();
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Container>
      {loading && <ActivityIndicator size="large" color="green" />}
      <InnerContainer
        showsVerticalScrollIndicator={false}
        style={{ display: loading ? "none" : "flex" }}
      >
        <SortContainer>
          <SortTopContainer>
            {btns.map((item) => {
              return (
                <CategoryBtn
                  key={item.value}
                  title={item.title}
                  onPress={() => handlePress(item.value)}
                  light={item.value === ctgr ? true : false}
                />
              );
            })}
          </SortTopContainer>
          {/* <Button
              title="Press me"
              onPress={() => categorySheetRef.current.open}
            /> */}
          <SortBottomContainer>
            <Location>Now • London Hall</Location>
          </SortBottomContainer>
        </SortContainer>
        {data.map((item) => {
          return (
            <MainCard
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              price={ctgr === 0 ? item.price : ""}
              distance={ctgr === 1 ? item.distance : ""}
              deliveryTime={item.deliveryTime}
              rating={item.rating}
              promotion={ctgr === 0 ? item.promotion : ""}
              promPrice={item.promPrice}
              promQuantity={item.promQuantity}
              onPress={() =>
                navigation.navigate(ROUTES.RESTAURANT_DETAILS, {
                  id: item.id,
                })
              }
            />
          );
        })}
        <View>
          <View
            style={{
              paddingHorizontal: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontWeight: 700, fontSize: 25, marginBottom:20}}>
              Today’s offers
            </Text>
            <Text style={{ fontWeight: 400, fontSize: 18, marginBottom:20}}>See All</Text>
          </View>
          <ScrollView horizontal>
            {data.map((item) => {
              return (
                <MainCard
                  key={item.id}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  price={ctgr === 0 ? item.price : ""}
                  distance={ctgr === 1 ? item.distance : ""}
                  deliveryTime={item.deliveryTime}
                  rating={item.rating}
                  promotion={ctgr === 0 ? item.promotion : ""}
                  promPrice={item.promPrice}
                  promQuantity={item.promQuantity}
                  onPress={() =>
                    navigation.navigate(ROUTES.RESTAURANT_DETAILS, {
                      id: item.id,
                    })
                  }
                />
              );
            })}
          </ScrollView>
        </View>
        {data.map((item) => {
          return (
            <MainCard
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              price={ctgr === 0 ? item.price : ""}
              distance={ctgr === 1 ? item.distance : ""}
              deliveryTime={item.deliveryTime}
              rating={item.rating}
              promotion={ctgr === 0 ? item.promotion : ""}
              promPrice={item.promPrice}
              promQuantity={item.promQuantity}
              onPress={() =>
                navigation.navigate(ROUTES.RESTAURANT_DETAILS, {
                  id: item.id,
                })
              }
            />
          );
        })}
        <View>
          <View
            style={{
              paddingHorizontal: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontWeight: 700, fontSize: 25, marginBottom:20 }}>
              Popular Near You
            </Text>
            <Text style={{ fontWeight: 400, fontSize: 18, marginBottom:20 }}>See All</Text>
          </View>
          <ScrollView horizontal>
            {data.map((item) => {
              return (
                <MainCard
                  key={item.id}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  price={ctgr === 0 ? item.price : ""}
                  distance={ctgr === 1 ? item.distance : ""}
                  deliveryTime={item.deliveryTime}
                  rating={item.rating}
                  promotion={ctgr === 0 ? item.promotion : ""}
                  promPrice={item.promPrice}
                  promQuantity={item.promQuantity}
                  onPress={() =>
                    navigation.navigate(ROUTES.RESTAURANT_DETAILS, {
                      id: item.id,
                    })
                  }
                />
              );
            })}
            {data.map((item) => {
              return (
                <MainCard
                  key={item.id}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  price={ctgr === 0 ? item.price : ""}
                  distance={ctgr === 1 ? item.distance : ""}
                  deliveryTime={item.deliveryTime}
                  rating={item.rating}
                  promotion={ctgr === 0 ? item.promotion : ""}
                  promPrice={item.promPrice}
                  promQuantity={item.promQuantity}
                  onPress={() =>
                    navigation.navigate(ROUTES.RESTAURANT_DETAILS, {
                      id: item.id,
                    })
                  }
                />
              );
            })}
          </ScrollView>
        </View>
        {data.map((item) => {
          return (
            <MainCard
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              price={ctgr === 0 ? item.price : ""}
              distance={ctgr === 1 ? item.distance : ""}
              deliveryTime={item.deliveryTime}
              rating={item.rating}
              promotion={ctgr === 0 ? item.promotion : ""}
              promPrice={item.promPrice}
              promQuantity={item.promQuantity}
              onPress={() =>
                navigation.navigate(ROUTES.RESTAURANT_DETAILS, {
                  id: item.id,
                })
              }
            />
          );
        })}
        <Portal>
          <BottomSheet bottomSheetRef={categorySheetRef}>
            <Button
              title="press me"
              onPress={() => categorySheetRef.current.close}
            />
            <Text>Hello There</Text>
          </BottomSheet>
        </Portal>
      </InnerContainer>
    </Container>
  );
}
export default Home;
