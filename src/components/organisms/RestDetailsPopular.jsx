import React from "react";
import styled from "styled-components";
import { Image } from "react-native";
import Text from "../atoms/Text";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

const LeftContainer = styled.View`
  width: ${({ img }) => (img ? "60%" : "90%")};
`;

const Promo = styled.View`
  justify-content: center;
  align-items: center;
  background: #34a853;
  border-radius: 25px;
  padding: 5px 8px;
  width: 60px;
  height: 30px;
  margin-top: 8px;
`;

const PromoText = styled(Text)`
  text-align: center;
`;

const RightContainer = styled.View``;

const Title = styled(Text)`
  font-size: 20px;
  margin-bottom: 4px;
`;

const Desc = styled(Text)`
  font-size: 16px;
`;

const CardImage = styled.Image``;

const Price = styled(Text)`
  font-size: 14px;
  margin-bottom: 4px;
`;

const Popular = styled.View`
  justify-content: center;
  align-items: center;
  background: #34a853;
  border-radius: 25px;
  padding: 5px 8px;
  width: 70px;
  height: 30px;
  margin-top: 8px;
`;

const PopularText = styled(Text)`
  text-align: center;
`;

const RestDetailsPopular = ({
  title,
  price,
  desc,
  img,
  promo,
  itemQuantity,
  popular,
  ...props
}) => {
  return (
    <Container {...props}>
      <LeftContainer img={img}>
        {title && (
          <Title font="medium" size="medium">
            {title}{" "}
          </Title>
        )}
        {price && <Price>US${price}</Price>}
        {desc && (
          <Desc color="grey" numberOfLines={3}>
            {desc}
          </Desc>
        )}

        {promo && (
          <Promo>
            <PromoText font="medium" color="white">
              Promo
            </PromoText>
          </Promo>
        )}
        {popular && (
          <Popular>
            <PopularText font="medium" color="white">
              Popular
            </PopularText>
          </Popular>
        )}
      </LeftContainer>

      <RightContainer>{img && <CardImage source={img} />}</RightContainer>
    </Container>
  );
};

export default RestDetailsPopular;
