import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Snackbar from "react-native-snackbar-component";
import styled from "styled-components/native";

const NOTIFICATION_DISMISS_TIME = 3000;

const SnackBox = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 16px;
`;
const InfoBox = styled.View`
  margin-left: 15px;
`;

const AppSnackBar = (props) => {
  const { text, isError, visible = false, callback } = props;

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        callback(false);
      }, NOTIFICATION_DISMISS_TIME);

      return () => clearTimeout(timer);
    }
  }, [visible, callback]);

  const Message = () => {
    return (
      <SnackBox>
        <InfoBox>
          <Text style={{ fontWeight: "bold", color: "#FFFFFF" }}>
            {isError ? "Error" : "Success"}
          </Text>
          <Text style={{ color: "#FFFFFF" }}>{text}</Text>
        </InfoBox>
      </SnackBox>
    );
  };

  return (
    <Snackbar
      visible={visible}
      backgroundColor="#81b29a"
      messageColor="#FFFFFF"
      textMessage={Message}
      messageStyle={{ fontFamily: "medium" }}
      position="top"
      top={15}
      containerStyle={{
        marginHorizontal: 22,
        borderRadius: 12,
      }}
    />
  );
};

export default AppSnackBar;
