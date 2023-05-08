import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native";
import styled from "styled-components";

import RestDetailsCard from "../organisms/RestDetails";

const data = {
  restaurant: {
    id: "0",
    name: "Lanespan Pizza & Pub (Emeryville)",
    category: "Pizza",
    rating: "4",
    ratingQuantity: 300,
    workingHours: "Open untill 3:00 AM",
  },
  mostPopular: [
    {
      id: "1",
      title: "McMushroom Pizza",
      price: "US $21.00",
      desc: "Garlic, olive oil base, mozarella,cremini mushrooms, ricotta, thyme, white truffle oil. Addarugula for an extra charge",
      imgUrl: require("../../../assets/images/RestDetailsImages/pizza1.png"),
    },
    {
      id: "2",
      title: "Broken Mush Pizza",
      price: "US $18.00",
      desc: "Hot peppers, mozzarella, spicy marinara, spicy sporessata and picante infused olive oil",
      imgUrl: require("../../../assets/images/RestDetailsImages/pizza2.png"),
    },
    {
      id: "3",
      title: "Margarita Pizza",
      price: "US $20.00",
      desc: "Whole milk mozarrela pearls,mozarrela, arinara, shavedParmesan, fresh basil and extravirgin olive oil",
      imgUrl: require("../../../assets/images/RestDetailsImages/pizza3.png"),
    },
  ],

  pickedForYou: [
    {
      id: "4",
      title: "McMushroom Pizza",
      price: "US $21.00",
      desc: "Garlic, olive oil base, mozarella,cremini mushrooms, ricotta, thyme, white truffle oil. Addarugula for an extra charge",
    },
    {
      id: "5",
      title: "Broken Mush Pizza",
      price: "US $18.00",
      desc: "Hot peppers, mozzarella, spicy marinara, spicy sporessata and picante infused olive oil",
    },
    {
      id: "6",
      title: "Margarita Pizza",
      price: "US $20.00",
      desc: "Whole milk mozarrela pearls,mozarrela, arinara, shavedParmesan, fresh basil and extravirgin olive oil",
    },
    {
      id: "7",
      title: "Rus River Pliny Bottle ",
      price: "US $10.00",
      desc: "Must be 21 to purchase",
    },
  ],
  OurSpecialPizza: [
    {
      id: "7",
      title: "McMushroom Pizza",
      price: "US $21.oo",
      desc: "Some random description",
      imgUrl: require("../../../assets/images/RestDetailsImages/pizza5.png"),
    },
    {
      id: "8",
      title: "McMushroom Pizza",
      price: "US $21.oo",
      desc: "Some random description",
      imgUrl: require("../../../assets/images/RestDetailsImages/pizza4.png"),
    },
    {
      id: "9",
      title: "McMushroom Pizza",
      price: "US $21.oo",
      desc: "Some random description",
      imgUrl: require("../../../assets/images/RestDetailsImages/pizza6.png"),
    },
  ],
  Starters: [
    {
      id: "10",
      title: "Garlic knots",
      desc: "Priced by add-ons",
      imgUrl: require("../../../assets/images/RestDetailsImages/starters.png"),
    },
  ],
  Salads: [
    {
      id: "11",
      title: "Little Ceasar Salad (Vegan)",
      price: "US $18.00",
      desc: "Little Gems, House Made Vegan Dressing, Croutons, Nutrtional Yeast, Baked Capers",
    },
  ],
  SaladsTwo: [
    {
      id: "12",
      title: "Rocket Salad",
      price: "US $10.00",
      desc: "Arugula, shaved fennel, vinegar and olive oil, percorino and spanish marcona almonds",
    },
  ],
  HappyBirthdayPizza: [
    {
      id: "13",
      title: "Happy birthday Pizza",
      price: "US $27.00",
      desc: "Pepperoni, mariaara, mozzarella, garlic and extra virgin olive oil",
    },
  ],
  Miscellaneous: [
    {
      id: "14",
      title: "Garlic knots",
      price: "US $1.50",
    },
  ],
  Marinara: [
    {
      id: "15",
      title: "Marinara",
      price: "US $1.00",
    },
  ],
  BalsamicGlaze: [
    {
      id: "16",
      title: "Balsamic Glaze",
      price: "US $1.50",
    },
  ],
  AlcoholBeer: [
    {
      id: "17",
      title: "Russian River Pliny Bottle",
      price: "US $8.00",
      desc: "Must be 21 to purchase",
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

const RestTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  margin-top: 50px;
  width: 250px;
`;

const RestInfo = styled.Text`
  margin-left: 5px;
`;

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
const Delivery = styled.View`
  display: flex;
  flex-direction: row;
  border-radius: 40px;
  background-color: #eeeeee;
  width: 343px;
  height: 52px;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 0 auto;
  margin-bottom: 25px;
  margin-top: 10px;
`;

const DeliveryRight = styled.View`
  height: 35px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  padding-right: 20px;
  display: flex;
  align-items: center;
`;
const DeliveryLeft = styled.View`
  height: 35px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  display: flex;
  align-items: center;
`;
const SectionTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  margin-bottom: 18px;
`;
const SectionContainer = styled.View`
  padding: 0 15px;
`;

// const Starters = styled.View``;

// popular and promo btns

const PopularView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 8px;
  width: 67px;
  height: 30px;
  background: #34a853;
  border-radius: 25px;
`;
const Popular = styled.Text`
  color: #ffffff;
`;
const Promo = styled.Text`
  color: #ffffff;
`;
const BottomView = styled.View``;
const BottomText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #4ba457;
`;
const BottomBorder = styled.View`
  width: 100%;
  height: 2px;
  background-color: #f6f6f6;
  margin-bottom: 20px;
`;
const ratingImage = require("../../../assets/images/RestDetailsImages/RatingStar.png");
const arrowImg = require("../../../assets/images/RestDetailsImages/arrow.png");
const group = require("../../../assets/images/RestDetailsImages/Group.png");

const RestaurantDetails = ({ route, navigation }) => {
  const rest = data.restaurant;
  const calcRating = (num) => {
    if (num > 200) {
      return "200+Rating";
    } else {
      return num;
    }
  };
  return (
    <Container>
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
            {calcRating(rest.ratingQuantity)} •Pizza• $$
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

        <Delivery onPress={() => console.log("works")}>
          <DeliveryRight>
            <Text>Delivery</Text>
            <Text>25 - 35 min 1.7mi</Text>
          </DeliveryRight>
          <DeliveryLeft>
            <Text>Pickup</Text>
            <Text>5 - 15 min 1.7mi</Text>
          </DeliveryLeft>
        </Delivery>
      </HeaderContainer>

      <SectionContainer>
        <SectionTitle>Most Popular</SectionTitle>
        {data.mostPopular.map((item) => {
          return (
            <RestDetailsCard
              title={item.title}
              subTitle={item.price}
              desc={item.desc}
              imgUrl={item.imgUrl}
            />
          );
        })}
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Picked For You</SectionTitle>
        {data.pickedForYou.map((item) => {
          return (
            <RestDetailsCard
              title={item.title}
              subTitle={item.price}
              desc={item.desc}
            />
          );
        })}
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Starters</SectionTitle>
        {data.Starters.map((item) => {
          return (
            <RestDetailsCard
              title={item.title}
              desc={item.desc}
              imgUrl={item.imgUrl}
            />
          );
        })}
        <PopularView>
          <Popular>Popular</Popular>
        </PopularView>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Salads</SectionTitle>
        {data.Salads.map((item) => {
          return (
            <RestDetailsCard
              title={item.title}
              subTitle={item.price}
              desc={item.desc}
            />
          );
        })}
        <PopularView>
          <Popular>Popular</Popular>
        </PopularView>
      </SectionContainer>

      <SectionContainer>
        {data.SaladsTwo.map((item) => {
          return (
            <RestDetailsCard
              title={item.title}
              subTitle={item.price}
              desc={item.desc}
            />
          );
        })}
        <PopularView>
          <Popular>Popular</Popular>
        </PopularView>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Our Special Pizza</SectionTitle>
        {data.OurSpecialPizza.map((item) => {
          return (
            <RestDetailsCard
              title={item.title}
              subTitle={item.price}
              desc={item.desc}
              imgUrl={item.imgUrl}
            />
          );
        })}
      </SectionContainer>

      <SectionContainer>
        {data.HappyBirthdayPizza.map((item) => {
          return (
            <RestDetailsCard
              title={item.title}
              subTitle={item.price}
              desc={item.desc}
            />
          );
        })}
        <PopularView>
          <Popular>Popular</Popular>
        </PopularView>
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Miscellaneous</SectionTitle>
        {data.Miscellaneous.map((item) => {
          return <RestDetailsCard title={item.title} subTitle={item.price} />;
        })}
        <PopularView>
          <Popular>Popular</Popular>
        </PopularView>
      </SectionContainer>

      <SectionContainer>
        {data.Marinara.map((item) => {
          return <RestDetailsCard title={item.title} subTitle={item.price} />;
        })}
        <PopularView>
          <Popular>Popular</Popular>
        </PopularView>
      </SectionContainer>

      <SectionContainer>
        {data.BalsamicGlaze.map((item) => {
          return <RestDetailsCard title={item.title} subTitle={item.price} />;
        })}
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Alcohol - Beer (Must be 21 to Purchase)</SectionTitle>
        {data.AlcoholBeer.map((item) => {
          return (
            <RestDetailsCard
              title={item.title}
              subTitle={item.price}
              desc={item.desc}
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
