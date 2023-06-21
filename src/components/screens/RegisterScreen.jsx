import React, { useState } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import styled from "styled-components/native";
import Screen from "../atoms/Screen";
import Button from "../atoms/Button";
import * as ROUTES from "../../constants/Routes";
import AppSnackBar from "../molecules/AppSnackBar";
import { storeData } from "../../constants/Helpers/manageStorage";

const Container = styled(Screen)`
  flex: 1;
`;

const InnerContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputField = styled(TextInput)`
  background-color: #ffffff;
  height: 40px;
  border-radius: 10px;
  width: 100%;
  font-size: 16px;
  padding-left: 10px;
`;

const RegisterScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    if (
      form.name === "" ||
      form.email === "" ||
      form.password === "" ||
      form.confirmPassword === ""
    ) {
      setError(true);
    } else {
      try {
        await storeData("user", form);
        setSuccess(true);
        navigation.navigate(ROUTES.SIGN_IN_SCREEN);
      } catch (error) {
        setError(true);
      }
    }
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <AppSnackBar
          visible={success}
          text="You have been registered"
          callback={() => setSuccess(false)}
        />
        <AppSnackBar
          visible={error}
          text="Oops! An error occurred"
          isError={true}
          callback={() => setError(false)}
        />
        <InnerContainer>
          <InputField
            placeholder="Full Name"
            value={form.name}
            onChangeText={(text) => setForm({ ...form, name: text })}
          />

          <InputField
            placeholder="E-mail"
            value={form.email}
            onChangeText={(text) => setForm({ ...form, email: text })}
          />
          <InputField
            placeholder="Password"
            value={form.password}
            secureTextEntry={true}
            onChangeText={(text) => setForm({ ...form, password: text })}
          />
          <InputField
            placeholder="Confirm Password"
            value={form.confirmPassword}
            secureTextEntry={true}
            onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
          />
          <Button
            title="Register"
            onPress={handleSubmit}
            style={{ marginTop: 50 }}
          />
        </InnerContainer>
      </ScrollView>
    </Container>
  );
};

export default RegisterScreen;
