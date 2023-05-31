import { View } from "react-native";
import React from "react";
import Button from "../atoms/Button";

import Text from "../atoms/Text";

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>FORGOT PASSWORD</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Go Shop" onPress={() => navigation.navigate("Shop")} />
    </View>
  );
};

export default ForgotPassword;

