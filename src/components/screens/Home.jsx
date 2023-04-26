import { Text, View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import MainCard from "../organisms/MainCard"

const listToRender = [
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

function Home({ navigation }) {
  return (
    <ScrollView>
      <View
        style={{
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        {listToRender.map((item) => {
          return (
            <MainCard
              imgUrl={item.imgUrl}
              title={item.title}
              price={item.price}
              key={item.id} 
              deliveryTime={item.deliveryTime}
              rating={item.rating}
              promotion={item.promotion}
              promQuantity={item.promQuantity}
              promPrice={item.promPrice}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

export default Home;

