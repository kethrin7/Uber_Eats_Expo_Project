import React from "react";
import { Modalize } from "react-native-modalize";
import styled from "styled-components";

const Container = styled(Modalize)`
  display: flex;
  flex-direction: row;
`;
const BottomText = styled.Text`
  font-family: UberMoveMedium;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  margin: 25px 0 30px 0;
`;
const BottomSheet = ({ bottomSheetRef, children, modalHeight }) => {
  return (
    <Container ref={bottomSheetRef} modalHeight={modalHeight}>
      <BottomText>All categories</BottomText>
      <Row>
        <Column>{children[0]}</Column>
        <Column>{children[1]}</Column>
        <Column>{children[2]}</Column>
        <Column>{children[3]}</Column>
      </Row>
      <Row>
        <Column>{children[4]}</Column>
        <Column>{children[5]}</Column>
        <Column>{children[6]}</Column>
        <Column>{children[7]}</Column>
      </Row>
      <Row>
        <Column>{children[8]}</Column>
        <Column>{children[9]}</Column>
        <Column>{children[10]}</Column>
        <Column>{children[11]}</Column>
      </Row>
      <Row>
        <Column>{children[12]}</Column>
        <Column>{children[13]}</Column>
        <Column>{children[14]}</Column>
        <Column>{children[15]}</Column>
      </Row>
      <Row>
        <Column>{children[16]}</Column>
        <Column>{children[17]}</Column>
        <Column>{children[18]}</Column>
        <Column>{children[19]}</Column>
      </Row>
    </Container>
  );
};

const Row = styled.View`
  display: flex;
  flex-direction: row;
`;

const Column = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 16px;
`;
export default BottomSheet;
