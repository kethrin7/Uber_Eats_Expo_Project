import { Text, View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import MainCard from "../organisms/MainCard";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Portal } from "react-native-portalize";
import { useRef } from "react";

import * as ROUTES from "../../../src/constants/Routes";
import BottomSheet from "../atoms/BottomSheet";
import CtgrBtn from "../atoms/CtgrBtn";
import CategoryCard from "../atoms/CategoryCard";
import Screen from "../../components/atoms/Screen";
import styled from "styled-components";

// Data
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
    id: 7,
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
    id: 8,
    imgUrl: require("../../../assets/images/photo2.png"),
    title: "Gourmet Burger Kitchen GBK",
    price: "0.70",
    deliveryTime: "10-25",
    rating: 4.4,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
    imgUrl: require("../../../assets/images/photo1.png"),
    title: "BBN inn",
    price: "3",
    deliveryTime: "10-25",
    rating: 4.9,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 15,
    imgUrl: require("../../../assets/images/photo2.png"),
    title: "Gourmet Burger Kitchen GBK",
    price: "0.70",
    deliveryTime: "10-25",
    rating: 4.4,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 16,
    imgUrl: require("../../../assets/images/photo3.png"),
    title: "African Flavour",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.8,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 17,
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
    id: 18,
    imgUrl: require("../../../assets/images/photo5.png"),
    title: "Scents Restaurant",
    price: "0.60",
    deliveryTime: "10-25",
    rating: 4.3,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 19,
    imgUrl: require("../../../assets/images/photo6.png"),
    title: "Steaky treats",
    price: "0.55",
    deliveryTime: "10-25",
    rating: 4.7,
    promQuantity: 5,
    promPrice: 8,
  },
  {
    id: 20,
    imgUrl: require("../../../assets/images/photo7.png"),
    title: "Foodilistica",
    price: "0.33",
    deliveryTime: "10-25",
    rating: 5,
    promQuantity: 5,
    promPrice: 8,
  },
];

const CategoryListItems = [
  {
    title: "Convenience",
    imgUrl: require("../../../assets/images/BotomSheetImages/convenience.png"),
  },
  {
    title: "Alcohol",
    imgUrl: require("../../../assets/images/BotomSheetImages/alcohol.png"),
  },
  {
    title: "Pet Supplies",
    imgUrl: require("../../../assets/images/BotomSheetImages/petsupplies.png"),
  },
  {
    title: "Flowers",
    imgUrl: require("../../../assets/images/BotomSheetImages/flowers.png"),
  },
  {
    title: "Grocery",
    imgUrl: require("../../../assets/images/BotomSheetImages/grocery.png"),
  },
  {
    title: "American",
    imgUrl: require("../../../assets/images/BotomSheetImages/american.png"),
  },
  {
    title: "Speciality",
    imgUrl: require("../../../assets/images/BotomSheetImages/speciality.png"),
  },
  {
    title: "Takeout",
    imgUrl: require("../../../assets/images/BotomSheetImages/takeout.png"),
  },
  {
    title: "Asian",
    imgUrl: require("../../../assets/images/BotomSheetImages/asian.png"),
  },
  {
    title: "Ice Cream",
    imgUrl: require("../../../assets/images/BotomSheetImages/icecream.png"),
  },
  {
    title: "Halal",
    imgUrl: require("../../../assets/images/BotomSheetImages/halal.png"),
  },
  {
    title: "Retails",
    imgUrl: require("../../../assets/images/BotomSheetImages/retails.png"),
  },
  {
    title: "Carribean",
    imgUrl: require("../../../assets/images/BotomSheetImages/carribean.png"),
  },
  {
    title: "Indian",
    imgUrl: require("../../../assets/images/BotomSheetImages/indian.png"),
  },
  {
    title: "French",
    imgUrl: require("../../../assets/images/BotomSheetImages/french.png"),
  },
  {
    title: "Fast food",
    imgUrl: require("../../../assets/images/BotomSheetImages/fastfood.png"),
  },
  {
    title: "Burger",
    imgUrl: require("../../../assets/images/BotomSheetImages/burger.png"),
  },
  {
    title: "Ride",
    imgUrl: require("../../../assets/images/BotomSheetImages/ride.png"),
  },
  {
    title: "Chinese",
    imgUrl: require("../../../assets/images/BotomSheetImages/chinese.png"),
  },
  {
    title: "Desserts",
    imgUrl: require("../../../assets/images/BotomSheetImages/desserts.png"),
  },
];

const Container = styled(Screen)`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding: 20px 20px 0 20px;
  background-color: #ffffff;
`;
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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

const CtgrBtnWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
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
    }, 1000);
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

          <SortBottomContainer>
            <Location>Now • London Hall</Location>
          </SortBottomContainer>

          <CtgrBtnWrapper>
            <CategoryCard
              title={CategoryListItems[0].title}
              imgUrl={CategoryListItems[0].imgUrl}
            />
            <CategoryCard
              title={CategoryListItems[1].title}
              imgUrl={CategoryListItems[1].imgUrl}
            />
            <CategoryCard
              title={CategoryListItems[2].title}
              imgUrl={CategoryListItems[2].imgUrl}
            />
            <CategoryCard
              key="more"
              title="More"
              imgUrl={require("../../../assets/images/BotomSheetImages/threeDots.png")}
              onPress={() => categorySheetRef.current.open()}
            />
          </CtgrBtnWrapper>
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
            <Text style={{ fontWeight: 700, fontSize: 25, marginBottom: 20 }}>
              Today’s offers
            </Text>
            <Text style={{ fontWeight: 400, fontSize: 18, marginBottom: 20 }}>
              See All
            </Text>
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
            <Text style={{ fontWeight: 700, fontSize: 25, marginBottom: 20 }}>
              Popular Near You
            </Text>
            <Text style={{ fontWeight: 400, fontSize: 18, marginBottom: 20 }}>
              See All
            </Text>
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
          <BottomSheet bottomSheetRef={categorySheetRef} modalHeight={700}>
            {CategoryListItems.map((item) => (
              <CategoryCard
                title={item.title}
                imgUrl={item.imgUrl}
                onPress={() => console.log(item.title)}
              />
            ))}
          </BottomSheet>
        </Portal>
      </InnerContainer>
    </Container>
  );
}
export default Home;
