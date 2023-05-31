import React, { useState, useRef } from "react";
import { ScrollView, View } from "react-native";
import Promotion from "../molecules/Promotion";
import { Portal } from "react-native-portalize";
import { Button } from "react-native";
import styled from "styled-components";

import * as ROUTES from "../../../src/constants/Routes";
import CustomCheckbox from "../molecules/Checkbox";
import DeliveryCard from "../organisms/DeliveryCard";
import DeliveryBottomSheet from "../atoms/DeliveryBottomSheet"
import RadioLabel from "../molecules/RadioLabel";
import Screen from "../atoms/Screen";
import Text from "../atoms/Text";


// >>>>>>>>DATA<<<<<<<<<<
const sauces = [
  {
    id: 0,
    value: 1,
    label: "Mariana Sauce",
  },
  {
    id: 1,
    value: 1,
    label: "Garlicky Sauce",
  },
  {
    id: 2,
    value: 1,
    label: "Pesto Sauce",
  },
  {
    id: 3,
    value: 1,
    label: "BBE Sauce",
  },
  {
    id: 4,
    value: 1,
    label: "Buffalo Sauce",
  },
];
const sizes = [
  {
    id: 0,
    isChecked: false,
    label: "Small 10” (6 Slices)",
  },
  {
    id: 1,
    isChecked: false,
    label: "Medium 12” (8 Slices)",
    price: 4,
  },
  {
    id: 2,
    isChecked: false,
    label: "Large 14” (8 Slices)",
    price: 10,
  },
  {
    id: 3,
    isChecked: false,
    value: 1,
    label: "Extra large 16” (12 Slices)",
    price: 15,
  },
  {
    id: 4,
    isChecked: false,
    label: "Super 20” (12 Slices)",
    price: 18,
  },
  {
    id: 5,
    isChecked: false,
    label: "24”",
    price: 25,
  },
];
const crust = [
  {
    id: 0,
    isChecked: false,
    label: "Regular Crust",
  },
  {
    id: 1,
    isChecked: false,
    label: "Corn Skinny Crust",
    price: 4,
  },
  {
    id: 2,
    isChecked: false,
    label: "Thinck Pan Crust",
    price: 10,
  },
];
const add = [
  {
    id: 0,
    isChecked: false,
    label: "1 Side of Ranch Dressing",
    price: 0.5,
  },
  {
    id: 1,
    isChecked: false,
    label: "2 Side of Ranch Dressing",
    price: 1,
  },
  {
    id: 2,
    isChecked: false,
    label: "Side of Marinara Sauce",
    price: 0.69,
  },
];
const together = [
  {
    id: 0,
    isChecked: false,
    label: "Soda",
    price: 1.69,
  },
  {
    id: 1,
    isChecked: false,
    label: "Cheeze Pizza",
    price: 12.99,
  },
  {
    id: 2,
    isChecked: false,
    label: "Amigos Hawaiana Pizza",
    price: 16.99,
  },
];
// >>>>>>>>>>>>>>STYLED<<<<<<<<<<<<<
const Container = styled(Screen)``;

const RestaurantTitle = styled(Text)``;

const ItemPrice = styled(Text)`
  margin: 8px 0;
`;
const ItemDesc = styled(Text)`
  color: #545454;
  margin-bottom: 36px;
`;
const SauceContainer = styled.View`
  margin: 24px 22px 0 22px;
`;
const MainTitle = styled(Text)``;

const MainTitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const AdditionalWrapper = styled.View`
  display: flex;
  margin-bottom: 20px;
`;

const AddOneText = styled(Text)`
  color: #545454;
`;

const RequiredView = styled.View`
  background-color: #eeeeee;
  border-radius: 10px;
  padding: 7px;
`;

// >>>>>>>>>>>>>>LOGIC<<<<<<<<<<<<<

const OrdersDetails = ({ navigation, route }) => {
  console.log(route.params);

  const { restaurantName, price, desc } = route.params;
  let num = parseInt(price);
  const [total, setTotal] = useState(num);
  const [sizePrice, setSizePrice] = useState(num);
  const [crustPrice, setCrustPrice] = useState(num);
  const [selectedSauceId, setSelectedSauceId] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const BottomSheetRef = useRef();

  const handlePress = (id, amount, arr, callback) => {
    callback(num + (amount ? amount : 0));

    arr.forEach((item) => {
      if (item.id !== id) {
        item.isChecked = false;
      } else {
        item.isChecked = true;
      }
    });
  };

  const handleSauce = (id, amount, callback) => {
    callback(num + (amount ? amount : 0));
    setSelectedSauceId(id);
  };

  const handleCheckbox = (item) => {
    item.isChecked = !item.isChecked;

    const updatedCheckboxes = item.isChecked
      ? [...selectedCheckboxes, item]
      : selectedCheckboxes.filter((checkbox) => checkbox.id !== item.id);
    setSelectedCheckboxes(updatedCheckboxes);

    const totalPrice = updatedCheckboxes.reduce(
      (sum, checkbox) => sum + (checkbox.isChecked ? checkbox.price : 0),
      sizePrice
    );
    setTotal(totalPrice);
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <SauceContainer>
          <RestaurantTitle size={26}>{restaurantName}</RestaurantTitle>
          <ItemPrice size={22}>US${price}</ItemPrice>
          <ItemDesc>{desc}</ItemDesc>
          <Promotion />
        </SauceContainer>

        <SauceContainer>
          <MainTitleWrapper>
            <MainTitle size={18}>Choose your sauce</MainTitle>
            <RequiredView>
              <Text>Required</Text>
            </RequiredView>
          </MainTitleWrapper>
          {sauces.map((item) => (
            <RadioLabel
              key={item.id}
              label={item.label}
              status={selectedSauceId === item.id ? "checked" : "unchecked"}
              onPress={() => handleSauce(item.id, item.value, setCrustPrice)}
              checked={selectedSauceId === item.id}
            />
          ))}
        </SauceContainer>

        <SauceContainer>
          <MainTitleWrapper>
            <MainTitle size={18}>Choose your size</MainTitle>
            <RequiredView>
              <Text>Required</Text>
            </RequiredView>
          </MainTitleWrapper>
          {sizes.map((item) => (
            <RadioLabel
              key={item.id}
              label={item.label}
              price={item.price}
              onPress={() =>
                handlePress(item.id, item.price, sizes, setSizePrice)
              }
              checked={item.isChecked}
            />
          ))}
        </SauceContainer>

        <SauceContainer>
          <MainTitleWrapper>
            <MainTitle size={18}>Choose your crust</MainTitle>
            <RequiredView>
              <Text>Required</Text>
            </RequiredView>
          </MainTitleWrapper>
          {crust.map((item) => (
            <RadioLabel
              key={item.id}
              label={item.label}
              price={item.price}
              onPress={() =>
                handlePress(item.id, item.price, crust, setSizePrice)
              }
              checked={item.isChecked}
            />
          ))}
        </SauceContainer>

        {/* <<<<<<<<<<<<<<CHECKBOXES>>>>>>>>>>>>> */}
        <SauceContainer>
          <AdditionalWrapper>
            <MainTitle size={18}>Choose your add-ons</MainTitle>
            <AddOneText>Choose up to 3</AddOneText>
          </AdditionalWrapper>
          {add.map((item) => (
            <CustomCheckbox
              key={item.id}
              label={item.label}
              price={item.price}
              checked={item.isChecked}
              onPress={() => handleCheckbox(item)}
            />
          ))}
        </SauceContainer>

        <SauceContainer>
          <AdditionalWrapper>
            <MainTitle size={18}>Frequently brought together</MainTitle>
          </AdditionalWrapper>
          {together.map((item) => (
            <CustomCheckbox
              key={item.id}
              label={item.label}
              price={item.price}
              checked={item.isChecked}
              onPress={() => handleCheckbox(item)}
            />
          ))}
          <Button
            title={`Total Price: $${total.toFixed(2)}`}
            onPress={() => BottomSheetRef.current.open()}
          />
        </SauceContainer>
        <Portal>
          <DeliveryBottomSheet
            bottomSheetRef={BottomSheetRef}
            modalHeight={850}
            onPress={() => {
              BottomSheetRef.current.close();
              navigation.navigate(ROUTES.DELIVERY_SCREEN)
            }}
          >
            <View>
              <Text>Taco Bell (2255 Telegraph Avenue)</Text>
              <DeliveryCard />
            </View>
          </DeliveryBottomSheet>
        </Portal>
      </ScrollView>
    </Container>
  );
};

export default OrdersDetails;
