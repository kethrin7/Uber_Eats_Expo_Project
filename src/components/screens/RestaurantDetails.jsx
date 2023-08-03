import React from "react";
import { View, Image } from "react-native";
import { ScrollView } from "react-native";
import styled from "styled-components";
import { useEffect, useState } from "react";

import * as ROUTES from "../../../src/constants/Routes";
import RestDetailsCard from "../organisms/RestDetails";
import RestDetailsPopular from "../organisms/RestDetailsPopular";
import Text from "../atoms/Text";
import GrayCtgrBtn from "../atoms/GrayCtgrBtn";

const data = {
  restaurant: {
    id: 0,
    name: "Lanespan Pizza & Pub (Emerville)",
    rating: 4.6,
    ratingQuantity: 300,
    category: "Pizza",
    workingHours: "open until 3:00 am ",
    deliveryTime: "25-35",
    deliveryDistance: "1,7",
    pickupTime: "5-15",
    pickupDistance: "1,7",
  },

  bottomRestName: {
    id: 1,
    restTitle: "Alcohol - Beer (Must be 21 to Purchase)",
    title: "Russian River Plinty Bottle",
    price: "21.00",
    desc: "Must be 21 to purchase ",
  },

  mostPopular: [
    {
      id: 2,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "olive oil base, mozarella,cremini mushrooms, ricotta, thyme, white truffle oil.",
      img: require("../../../assets/images/RestDetailsImages/pizza1.png"),
    },
    {
      id: 3,
      title: "Broken Mush Pizza",
      price: "21.00",
      desc: "Hot peppers, mozzarella, spicy marinara, spicy sporessata and picante infused olive oil",
      img: require("../../../assets/images/RestDetailsImages/pizza2.png"),
    },
    {
      id: 4,
      title: "Margarita Pizza",
      price: "21.00",
      desc: "mozarella,cremini mushrooms, ricotta, thyme, white truffle oil. ",
      img: require("../../../assets/images/RestDetailsImages/pizza3.png"),
    },
    {
      id: 5,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Whole milk mozarrela pearls,mozarrela, arinara, shavedParmesan, fresh basil and extravirgin olive oil",
      promo: true,
    },
  ],
  pickedForYou: [
    {
      id: 6,
      title: "McMushroom Pizza",
      price: "21.00",
      desc: " olive oil base, mozarella,cremini mushrooms, ricotta, thyme, white truffle oil.",
    },
    {
      id: 7,
      title: "Broken Mush Pizza",
      price: "18.00",
      desc: "Hot peppers, mozzarella, spicy marinara, spicy sporessata and picante infused olive oil",
    },
    {
      id: 8,
      title: "Margarita Pizza",
      price: "20.00",
      desc: "Whole milk mozarrela pearls,mozarrela, arinara, shavedParmesan, fresh basil and extravirgin olive oil",
    },
    {
      id: 9,
      title: "Rus River Pliny Bottle ",
      price: "10.00",
      desc: "Must be 21 to purchase",
      itemQuantity: 12,
    },
  ],
  ourSpecialPizza: [
    {
      id: 17,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Hot peppers, mozzarella, spicy marinara, spicy sporessata and picante infused olive oil",
      img: require("../../../assets/images/RestDetailsImages/pizza4.png"),
    },
    {
      id: 18,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "Whole milk mozarrela pearls,mozarrela, arinara, shavedParmesan, fresh basil and extravirgin olive oil",
      img: require("../../../assets/images/RestDetailsImages/pizza5.png"),
    },
    {
      id: 19,
      title: "McMshroom pizza",
      price: "21.00",
      desc: "mozzarella, spicy marinara, spicy sporessata and picante infused olive oil",
      img: require("../../../assets/images/RestDetailsImages/pizza6.png"),
    },
    {
      id: 20,
      title: "Happy bithday Pizza",
      price: "21.00",
      desc: "spicy marinara, spicy sporessata and picante infused olive oil,mozzarella",
      popular: true,
    },
  ],
  starters: {
    id: 14,
    title: "Garlic knots",
    desc: "Priced by add-ons",
    popular: true,
    img: require("../../../assets/images/RestDetailsImages/starters.png"),
  },
  salads: [
    {
      id: 15,
      title: "Little Cesar Salad",
      price: "18.00",
      desc: " olive oil base, mozarella,cremini mushrooms, ricotta, thyme, white truffle oil.",
      popular: true,
    },
    {
      id: 16,
      title: "Rocket Salad",
      price: "10.00",
      desc: "Little Gems, House Made Vegan Dressing, Croutons, Nutrtional Yeast, Baked Capers",
    },
  ],
  mischelaneous: [
    {
      id: 21,
      title: "Little Cesar Salad",
      price: "18.00",
      popular: true,
    },
    {
      id: 22,
      title: "Rocket Salad",
      price: "10.00",
      popular: true,
    },
    {
      id: 23,
      title: "Great Salad",
      price: "10.00",
    },
  ],
};


// header section

const HeaderImage = styled(Image)`
  display: flex;
  align-items: center;
  width: 100%;
`;

const MapImg = styled(Image)`
  width: 100%;
`;

const Container = styled.ScrollView`
  background-color: #ffffff;
  width: 100%;
`;

const HeaderContainer = styled.View`
  padding: 0 15px;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 2px;
`;

const RestTitle = styled(Text)`
  font-size: 24px;
  margin-top: 50px;
  width: 250px;
`;

const RestInfo = styled(Text)`
  margin-left: 5px;
`;

const SwicherWrapper=styled.View`
  background-color: #eeeeee;
  border-radius: 50px;
  height: 55px;
  flex-direction: row;
  padding: 5px;`

// arrow and group icon
const Arrow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5px;
`;
const GroupView = styled.Pressable`
  width: 142px;
  height: 40px;
  align-items: center;
  background: #eeeeee;
  border-radius: 99px;
  display: flex;
  margin: 18px 0;
  justify-content: center;
`;
const GroupTitle = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

// delivery section
const SectionTitle = styled(Text)`
  font-size: 24px;
  margin-bottom: 18px;
`;
const SectionContainer = styled.View`
  margin: 0 15px;
`;

const BottomView = styled.View``;
const BottomText = styled(Text)`
  text-align: center;
  color: #4ba457;
`;
const BottomBorder = styled.View`
  width: 100%;
  height: 2px;
  background-color: #f6f6f6;
  margin-bottom: 20px;
`;

const CategoryBtnWrapper=styled.View`
`
const ratingImage = require("../../../assets/images/RestDetailsImages/RatingStar.png");
const arrowImg = require("../../../assets/images/RestDetailsImages/arrow.png");
const group = require("../../../assets/images/RestDetailsImages/Group.png");


const btns = [
  { title: "Delivery", value: 0 },
  { title: "Pickup", value: 1 },
];

const RestaurantDetails = ({ route, navigation }) => {
  const [ctgr, setCtgr] = useState(0);
  // const [data, setData] = useState([]);

  const fetchData = () => {
    if (ctgr === 0) {
      setData(DeliveryList);
    } else if (ctgr === 1) {
      setData(PickupList);
    }
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handlePress = (value) => {
    setCtgr(value);
  };

  const rest = data.restaurant;

  const calcRating = (num) => {
    if (num > 200) {
      return "200+Rating";
    } else {
      return num;
    }
  };
  return (
    <Container contentContainerStyle={{ paddingBottom: 30 }}>
      <HeaderImage
        source={require("../../../assets/images/RestDetailsImages/restdetails.png")}
      />
      <MapImg
        source={require("../../../assets/images/RestDetailsImages/map.png")}
      />
      <HeaderContainer>
        <RestTitle>{rest.name}</RestTitle>
        <InfoContainer>
          <View style={{ marginRight: 3 }}>
            <Image source={ratingImage} />
          </View>
          <RestInfo>
            {rest.rating}
            {calcRating(rest.ratingQuantity)} • Pizza • $$
          </RestInfo>
        </InfoContainer>

        <Arrow>
          <Text>{rest.workingHours}</Text>
          <Image source={arrowImg} />
        </Arrow>

        <GroupView onpress={() => console.log("its working")}>
          <GroupTitle>
            <Image source={group} />
            <Text>Group Order</Text>
          </GroupTitle>
        </GroupView>

        <SwicherWrapper>
          {btns.map((btn) => {
            return (
              <CategoryBtnWrapper>
                <GrayCtgrBtn
                  Time={btn.value === 0 ? rest.deliveryTime : rest.pickupTime}
                  Distance={
                    btn.value === 0
                      ? rest.deliveryDistance
                      : rest.pickupDistance
                  }
                  title={btn.title}
                  onPress={() => handlePress(btn.value)}
                  key={btn.id}
                  black={btn.value === ctgr ? true : false}
                />
              </CategoryBtnWrapper>
            );
          })}
        </SwicherWrapper>
      </HeaderContainer>

      <SectionContainer style={{ marginTop: 23 }}>
        <SectionTitle>Most Popular</SectionTitle>
        {data.mostPopular.map((item, index) => {
          return (
            <RestDetailsCard
              title={item.title}
              price={item.price}
              img={item.img}
              desc={item.desc}
              key={index}
              promo={item.promo}
              onPress={() =>
                navigation.navigate(ROUTES.ORDERS_DETAILS_SCREEN, {
                  ...item,
                  restaurantName: rest.name,
                })
              }
            />
          );
        })}
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Picked For You</SectionTitle>
        {data.pickedForYou.map((item, index) => {
          return (
            <RestDetailsCard
              title={item.title}
              price={item.price}
              desc={item.desc}
              key={index}
              itemQuantity={item.itemQuantity}
            />
          );
        })}
      </SectionContainer>

      <SectionContainer>
        <SectionContainer>
          <SectionTitle>Starters</SectionTitle>
          {
            <RestDetailsPopular
              title={data.starters.title}
              desc={data.starters.desc}
              img={data.starters.img}
              popular={data.starters.popular}
              key={data.starters.id}
            />
          }
        </SectionContainer>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Our Special Pizza</SectionTitle>
        {data.ourSpecialPizza.map((item, index) => {
          return (
            <RestDetailsPopular
              title={item.title}
              price={item.price}
              img={item.img}
              desc={item.desc}
              key={index}
              popular={item.popular}
            />
          );
        })}
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Mischelaneous </SectionTitle>
        {data.mischelaneous.map((item, index) => {
          return (
            <RestDetailsPopular
              title={item.title}
              price={item.price}
              img={item.img}
              desc={item.desc}
              key={index}
              popular={item.popular}
            />
          );
        })}
      </SectionContainer>

      <BottomBorder />
      <BottomView>
        <BottomText>Save US$25. Conditions apply.</BottomText>
      </BottomView>
    </Container>
  );
};

export default RestaurantDetails;
