import React from "react";
import styled from "styled-components";

import Text from "./Text";

const Container = styled.Pressable`
  width: 258px;
  height: 50px;
  background-color: #54924f;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 23px;
  display: flex;
`;

const Title = styled(Text)`
  color: #ffffff;
  font-size: 16px;
`;

const Button = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;




