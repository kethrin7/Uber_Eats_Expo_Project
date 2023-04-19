import React from "react";
import styled from "styled-components";

import Screen from "../atoms/Screen";
import LoginScreenImage from "../images/LoginScreenImage";
import Button from "../atoms/Button";

const Container = styled(Screen)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoginImage = styled(LoginScreenImage)`
  margin-top: 40px;
  margin-bottom: 54px;
`;

const SignInBtn = styled(Button)`
  margin-bottom: 10px;
`;

const GetStartedBtn = styled(Button)``;

const SkipBtn = styled(Button)`
  margin-top: 10px;
`;

const LoginScreen = ({ navigation }) => {
  return (
    <Container>
      <SignInBtn title="sign in with email" light />
      <LoginImage />
      <GetStartedBtn
        title="Get started"
        onPress={() => navigation.navigate("Registration")}
      />
      <SkipBtn title="Skip" />
    </Container>
  );
};

export default LoginScreen;
