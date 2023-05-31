import React from "react";
import styled from "styled-components";
import { Pressable } from "react-native";

import Text from "./Text";

const Btn = styled.Pressable`
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  ${({ black }) => (black ? `background - color : #ffffff` : "")};
  text-align: center;
  width: 180px;
  height:45px;
  font-size:20px;
  display:flex;
  margin:0 0 5px 10px
`;

const BtnText = styled(Text)`
  ${({ black }) => (black ? `color : #000000` : "")};
  line-height: 20px;
`;

const TimeText = styled(Text)`
  line-height: 20px;
`;

const GrayCtgrBtn = ({
  Time,
  Distance,
  onPress,
  black = false,
  title,
  ...props
}) => {
  return (
    <Btn onPress={onPress} black={black} {...props}>
      {title && (
        <BtnText font="medium" black={black}>
          {title}
        </BtnText>
      )}
      {Time && Distance && (
        <TimeText font="medium" color="grey">
          {Time} min {Distance}mi
        </TimeText>
      )}
    </Btn>
  );
};

export default GrayCtgrBtn;
