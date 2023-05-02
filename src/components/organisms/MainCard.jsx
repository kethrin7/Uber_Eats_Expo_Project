import React, { useState } from "react";
import styled from "styled-components";
import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Container = styled(Pressable)`
  margin-bottom: 25px;
  position: relative;
`;

const CardImage = styled(Image)``;

const TitleWrapper = styled(View)``;

const Title = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #000000;
`;

const SubTitle = styled(Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #000000;
`;

const Rating = styled(View)`
  width: 28px;
  height: 28px;
  background-color: #eeeeee;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RatingText = styled(Text)``;

const CardBottom = styled(View)`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Promotion = styled(View)`
  position: absolute;
  border-top-right-radius: 75px;
  border-bottom-right-radius: 75px;
  width: 235px;
  background-color: #34a853;
  top: 20px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PromotionText = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
`;

const LikeBtnWrapper = styled(Pressable)`
  position: absolute;
  right: 20px;
  top: 23px;
`;

const MainCard = ({
  imgUrl,
  title,
  price,
  deliveryTime,
  rating,
  promotion = false,
  promQuantity,
  promPrice,
}) => {
  
  const [liked, setLiked] = useState(false);
  const [changedRating, setChangedRating] = useState(rating);

const toggleLike = () => {
  setLiked(!liked);
  let newRating = changedRating + (liked ? -0.1 : 0.1);
  if (newRating > 5) {
    newRating = 5;
  } else if (newRating < 0) {
    newRating = 0;
  }
  setChangedRating(newRating);
};

  const LikeBtn = ({ likeIcon }) => {
    const { color, size, focused } = likeIcon;
    let icon = focused ? "heart" : "heart-outline";
    return <Ionicons name={icon} size={size} color={color} />;
  };

  return (
    <Container>
      <CardImage source={imgUrl} />
      <LikeBtnWrapper onPress={toggleLike}>
        <LikeBtn likeIcon={{ color: "white", size: 22, focused: liked }} />
      </LikeBtnWrapper>

      <CardBottom>
        <TitleWrapper>
          <Title>{title}</Title>
          {price && (
            <SubTitle>
              ${price} Delivery Fee | {deliveryTime} min
            </SubTitle>
          )}
        </TitleWrapper>
        <Rating>
          <RatingText>{changedRating}</RatingText>
        </Rating>
      </CardBottom>
      {promotion && (
        <Promotion>
          <PromotionText>
            {promQuantity} orders until ${promPrice}
          </PromotionText>
        </Promotion>
      )}
    </Container>
  );
};

export default MainCard;
