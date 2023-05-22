import React, { useState } from "react";
import Button from "../atoms/Button";
import styled from "styled-components";

const Container = styled.View``;

const UserName = styled.TextInput`
  background-color: #ece6e1;
  height: 50px;
  width: 258px;
  border-radius: 10px;
  margin-bottom: 5px;
  font-size: 22px;
`;

const Password = styled.TextInput`
  font-family: UberMoveMedium;
  background-color: #ece6e1;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 22px;
  width: 258px;
`;

const LoginBtn = styled(Button)``;

const AuthForm = ({ title, userName, setUserName, password, setPassword }) => {
  return (
    <Container>
      <UserName
        placeholder="UserName"
        onChange={(e) => setUserName(e.nativeEvent.text)}
        value={userName}
      />
      <Password
        placeholder="Password"
        onChange={(e) => setPassword(e)}
        value={password}
      />
      <LoginBtn title={title} />
    </Container>
  );
};

export default AuthForm;
