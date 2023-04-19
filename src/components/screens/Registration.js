import React, { useState } from "react";
import styled from "styled-components";
import Button from "../atoms/Button";

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

const RegistrationBtn = styled(Button)`
  margin-top: 10px;
`;

const Registration = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const completeRegistration = () => {
    navigation.navigate("Login", {
      userName: userName,
      password: password,
    });
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
      <RegistrationBtn title="Registration" onPress={completeRegistration} />
    </Container>
  );
};

export default Registration;
