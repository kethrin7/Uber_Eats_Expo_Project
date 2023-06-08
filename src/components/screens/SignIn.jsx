import React, { useState } from "react";
import { Pressable, View, Image } from "react-native";
import styled from "styled-components";

import * as ROUTES from "../../constants/Routes";
import Button from "../atoms/Button";
// import LoginScreenImage from "../../../assets/images/LoginScreenImage";
import Screen from "../atoms/Screen";
import Text from "../atoms/Text";

const Container = styled(Screen)``;

const MainCont = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  display: flex;
`;
const SignUpContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const SignUpButton = styled(Text)`
  color: blue;
  margin-left: 5px;
`;

const LoginImage = styled.Image`
  width: 100%;
  margin-bottom: 20px;
`;
const UserName = styled.TextInput`
  font-family: UberMoveMedium;
  background-color: #e6e6e6;
  height: 50px;
  width: 345px;
  margin-bottom: 5px;
  font-size: 22px;
`;

const Password = styled.TextInput`
  font-family: UberMoveMedium;
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
  margin-bottom: 20px;
`;
// const ForgetPasswordContainer = styled.View`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   margin-bottom: 20px;
// `;

const SignIn = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <MainCont>
        <LoginImage source={require("../../../assets/images/login.png")} />
        <Title>Use your uber account to get started</Title>
        <UserName
          placeholder="Username"
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
        {/* <ForgetPasswordContainer>
          <Text>forgot password?</Text>
          <Pressable
            onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD_SCREEN)}
          >
            <SignUpButton>Reset</SignUpButton>
          </Pressable>
        </ForgetPasswordContainer> */}

        {/* <SignUpContainer>
          <Text>Doesn't have an account?</Text>
          <Pressable>
            <SignUpButton>Sign Up</SignUpButton>
          </Pressable>
        </SignUpContainer> */}
      </MainCont>
    </Container>
  );
};

export default SignIn;
