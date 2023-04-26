import { Text, View } from "react-native";
import React from "react";
import styled from "styled-components";

import Button from "../atoms/Button";
import * as ROUTES from "../../constants/Routes";

const Btn = styled(Button)``;
const Settings = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Setting screen</Text>
      <Btn
        title="Go To Details"
        onPress={() => navigation.navigate(ROUTES.SETTINGS_DETAILS)}
      />
    </View>
  );
};

export default Settings;
