import React, { useState } from "react";
import Button from "../atoms/Button";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const UserName = styled.TextInput`
  background-color: #ece6e1;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 5px;
  font-size: 22px;
  width: 260px;
`;

const Password = styled.TextInput`
  background-color: #ece6e1;
  height: 50px;
  border-radius: 10px;
  margin-bottom: 15px;
  margin-top: 10px;
  font-size: 22px;
  width: 260px;
`;

const LoginBtn = styled(Button)``;
const RegistrationBtn = styled(Button)``;

const AuthForm = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const autorization = () => {
    if (userName === "Qeti" && password === "Qeti123") {
      navigation.navigate("Home");
    } else {
      alert("Error! ncorrect password or username");
    }
  };

  return (
    <Container>
      <UserName
        placeholder="UserName"
        onChange={(e) => setUserName(e.nativeEvent.text)}
        value={userName}
      />
      <Password
        placeholder="Password"
        onChange={(e) => setPassword(e.nativeEvent.text)}
        value={password}
      />
      <LoginBtn title="Login" onPress={() => autorization()} />
      <RegistrationBtn
        title="Registration"
        onPress={() => navigation.navigate("Registration")}
      />
    </Container>
  );
};

export default AuthForm;
