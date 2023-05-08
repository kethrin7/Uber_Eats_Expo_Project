import React from "react";
import { View, Text, Image } from "react-native";

import styled from "styled-components";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 102px;
  margin-bottom:35px;
`;

const RightContainer = styled.View`
  width: ${({ imgUrl }) => (imgUrl ? "60%" : "80%")};
`;

const LeftContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #000000;
`;
const SubTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const Desc = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;
const RestDetailsCard = ({
  title = "Title",
  subTitle = "Subtitle",
  desc = "Desc",
  imgUrl,
}) => {
  return (
    <Container>
      <RightContainer imgUrl={imgUrl}>
        {title && <Title>{title}</Title>}
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
        {desc && <Desc>{desc}</Desc>}
      </RightContainer>
      <LeftContainer>
        <Image source={imgUrl} />
      </LeftContainer>
    </Container>
  );
};

export default RestDetailsCard;
