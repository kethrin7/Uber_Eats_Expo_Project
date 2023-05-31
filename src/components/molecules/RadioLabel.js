import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { RadioButton } from "react-native-paper";

import Text from "../atoms/Text";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled(Text)``;

const PriceWrapper = styled.View``;

const Price = styled(Text)``;

const RadioLabel = ({ label, price, onPress, checked }) => {
  const handlePress = () => {
    if (!checked) {
      onPress();
    }
  };

  return (
    <Container>
      <LeftContainer>
        <RadioButton.Android
          value={checked}
          status={checked ? "checked" : "unchecked"}
          onPress={handlePress}
        />
        <Title>{label}</Title>
      </LeftContainer>
      {price && (
        <PriceWrapper>
          <Price>US$ {price}</Price>
        </PriceWrapper>
      )}
    </Container>
  );
};

export default RadioLabel;

