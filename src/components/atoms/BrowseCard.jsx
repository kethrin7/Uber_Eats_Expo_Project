import React from "react";
import styled from "styled-components";

import Text from "./Text";

const Container = styled.Pressable`
  border: 1px solid #e8e8e8;
  border-radius: 15px;
  margin-bottom: 16px;
`;
const CardImage = styled.Image`
  width: 180px;
  height: 98px;
`;

const Title = styled(Text)`
  text-align: center;
  margin: 10px 0;
`;

const BrowseCard = ({ imgUrl, title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <CardImage source={imgUrl} />
      <Title>{title}</Title>
    </Container>
  );
};

export default BrowseCard;
