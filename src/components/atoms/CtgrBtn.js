import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  height: 40px;
  ${({ light }) => (light ? `background - color : #000000` : "")};

  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 0 20px 0 20px;
  display: flex;
`;

const Title = styled.Text`
  color: ${({ light }) => (light ? "#FFFFFF" : "#000000")};
  font-size: 16px;
`;

const CtgrBtn = ({ title, onPress, light = false }) => {
  return (
    <Container onPress={onPress} light={light}>
      <Title light={light}>{title}</Title>
    </Container>
  );
};

export default CtgrBtn;
