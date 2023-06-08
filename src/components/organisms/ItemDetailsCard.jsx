import { View } from "react-native";
import React from "react";
import styled from "styled-components";

import Text from "../atoms/Text";

const Container = styled.View``;
const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const Title = styled(Text)``;
const Percent = styled(Text)`
  color: #6b6b6b;
`;
const GrayTitle = styled(Text)`
  color: #6b6b6b;
`;
const GrayPercent = styled(Text)`
  color: #6b6b6b;
`;
const ItemDetailsCard = ({ title, percent, grayTitle, grayPercent }) => {
  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        {percent && <Percent>{percent}</Percent>}
      </Wrapper>
      <Wrapper>
        <GrayTitle>{grayTitle}</GrayTitle>
        <GrayPercent>{grayPercent}</GrayPercent>
      </Wrapper>
    </Container>
  );
};

export default ItemDetailsCard;
