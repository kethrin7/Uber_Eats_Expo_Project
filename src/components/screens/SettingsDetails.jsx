import { View, Image, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import ImagePicker from "../atoms/ImagePicker";

import Screen from "../atoms/Screen";
import SettingDetailsCard from "../organisms/SettingDetailsCard";
import Text from "../atoms/Text";
import { ScrollView } from "react-native-gesture-handler";

const Container = styled(Screen)`
  display: flex;
  align-items: center;
`;
const MainInfoContainer = styled.View`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-evenly;
`;

const MainImage = styled.Image`
  width: 90px;
  height: 90px;
  margin: 23px 0 30px 0;
`;
const MainTitle = styled(Text)`
`;

const SettingsDetails = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("John Doe");

  const startEditing = () => {
    setEditing(true);
  };

  const finishEditing = () => {
    setEditing(false);
  };
  const handleNameChange = (newName) => {
    setName(newName);
  };

  return (
    <Container>
      <ScrollView>
        <MainInfoContainer>
          <MainImage
            source={
              image
                ? { uri: image }
                : require("../../../assets/images/SettingImages/userInfo.png")
            }
          />
          {editing ? (
            <TextInput
              value={name}
              onChangeText={handleNameChange}
              onBlur={finishEditing}
              autoFocus
            />
          ) : (
            <Pressable onPress={startEditing}>
              <MainTitle>{name}</MainTitle>
            </Pressable>
          )}
          <ImagePicker title={"EDIT ACCOUNT"} />
        </MainInfoContainer>
        <SettingDetailsCard />
      </ScrollView>
    </Container>
  );
};

export default SettingsDetails;

