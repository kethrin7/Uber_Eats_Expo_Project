import React, { useState, useEffect } from "react";
import { Pressable, View, Image, ScrollView } from "react-native";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as ROUTES from "../../constants/Routes";
import Button from "../atoms/Button";
import LoginScreenImage from "../../../assets/images/LoginScreenImage";
import Screen from "../atoms/Screen";
import Text from "../atoms/Text";
import { getData } from "../../constants/Helpers/manageStorage";
import AppSnackBar from "../molecules/AppSnackBar";

const Container = styled(Screen)`
  flex: 1;
`;

const MainCont = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  display: flex;
`;

const SignUpContainer = styled.Pressable`
  display: flex;
  flex-direction: row;
`;

const SignUpButton = styled(Text)`
  color: #54924f;
  margin-left: 5px;
`;

const LoginImage = styled.Image`
  width: 100%;
  margin-bottom: 20px;
`;

const UserName = styled.TextInput`
  font-family: Uber-Medium;
  background-color: #e6e6e6;
  height: 50px;
  width: 345px;
  margin-bottom: 5px;
  font-size: 22px;
`;

const Password = styled.TextInput`
  font-family: Uber-Medium;
  background-color: #e6e6e6;
  height: 50px;
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 22px;
  width: 345px;
`;

const SignInButton = styled(Button)`
  margin-top: 5px;
  margin-bottom: 23px;
`;

const Title = styled(Text)`
  font-size: 24px;
  margin-bottom: 15px;
`;

const SignIn = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const [isErrorSnackbar, setIsErrorSnackbar] = useState(false);

  const getUserData = async () => {
    try {
      const res = await getData("user");
      if (res && res.name === userName && res.password === password) {
        navigation.navigate(ROUTES.DRAWER_NAVIGATOR);
      }
    } catch (error) {
      setShowSnackbar(true);
      setSnackbarText("Error getting user data");
      setIsErrorSnackbar(true);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleSignIn = async () => {
    const userData = await getData("user");
    if (
      userData &&
      userData.name === userName &&
      userData.password === password
    ) {
      navigation.navigate(ROUTES.DRAWER_NAVIGATOR);
    } else {
      setShowSnackbar(true);
      setSnackbarText("Invalid username or password");
      setIsErrorSnackbar(true);
    }
  };

  const handleSnackbarDismiss = () => {
    setShowSnackbar(false);
  };
   return (
  <Container>
    <ScrollView showsVerticalScrollIndicator={false}>
      <MainCont>
        <LoginImage source={require("../../../assets/images/login.png")} />
        <Title>Use your Uber account to get started</Title>
        <UserName
          placeholder="Username"
          onChange={(e) => setUserName(e.nativeEvent.text)}
          value={userName}
        />
        <Password
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          value={password}
        />
        <SignInButton title="Sign In" onPress={handleSignIn} />

        <SignUpContainer>
          <Text>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate(ROUTES.REGISTER_SCREEN)}>
            <SignUpButton>Sign Up</SignUpButton>
          </Pressable>
        </SignUpContainer>
      </MainCont>
    </ScrollView>
    <AppSnackBar
      text={snackbarText}
      isError={isErrorSnackbar}
      visible={showSnackbar}
      callback={handleSnackbarDismiss}
    />
  </Container>
);
   }

export default SignIn;
