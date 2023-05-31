import React from "react";
import { View } from "react-native";
import { Checkbox } from "expo-checkbox";
import styled from "styled-components";

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

const CustomCheckbox = ({ checked, onPress, label, price }) => {
  return (
    <Container>
      <LeftContainer>
        <Checkbox
          style={{ margin: 5 }}
          value={checked}
          onValueChange={onPress}
          color={checked ? "#4630eb" : undefined}
        />
        <Title>{label}</Title>
      </LeftContainer>
      {price && (
        <PriceWrapper>
          <Price> US$ {price}</Price>
        </PriceWrapper>
      )}
    </Container>
  );
};

export default CustomCheckbox;
