import React, { useState } from "react";
import { Text, Pressable, View } from "react-native";
import styled from "styled-components";

import Screen from "../atoms/Screen";
import LoginScreenImage from "../images/LoginScreenImage";
import Button from "../atoms/Button";
import * as ROUTES from "../../constants/Routes";

const Container = styled(Screen)``;

const SignUpContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const SignUpButton = styled.Text`
  color: blue;
  margin-left: 5px;
`;

const LoginImage = styled(LoginScreenImage)`
  margin-top: 40px;
  margin-bottom: 54px;
`;

const UserName = styled.TextInput`
  background-color: #ece6e1;
  height: 50px;
  width: 258px;
  border-radius: 10px;
  margin-bottom: 5px;
  font-size: 22px;
`;

const Password = styled.TextInput`
  background-color: #ece6e1;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 22px;
  width: 258px;
`;

const SignInButton = styled(Button)`
  margin-top: 5px;
  margin-bottom: 23px;
`;

const ForgetPasswordContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const SignIn = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <LoginImage />
      <UserName
        placeholder="UserName"
        onChange={(e) => setUserName(e.nativeEvent.text)}
        value={userName}
      />
      <Password
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <SignInButton
        title="Sign In"
        onPress={() => navigation.navigate(ROUTES.DRAWER_NAVIGATOR)}
      />
      <ForgetPasswordContainer>
        <Text>forgot password?</Text>
        <Pressable
          onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD_SCREEN)}
        >
          <SignUpButton>Reset</SignUpButton>
        </Pressable>
      </ForgetPasswordContainer>

      <SignUpContainer>
        <Text>Doesn't have an account?</Text>
        <Pressable>
          <SignUpButton>Sign Up</SignUpButton>
        </Pressable>
      </SignUpContainer>
    </Container>
  );
};

export default SignIn;
