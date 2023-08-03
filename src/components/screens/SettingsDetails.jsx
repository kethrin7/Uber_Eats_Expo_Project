import { View, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import ImagePickerComponent from "../atoms/ImagePickerComponent";

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
  width: 100px;
  height: 100px;
  margin: 23px 0 20px 0;
  border-radius: 50px;
`;
const MainTitle = styled(Text)``;

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

  const handleImagePick = (pickedImage) => {
    setImage(pickedImage);
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
          <ImagePickerComponent
            title={"EDIT ACCOUNT"}
            callback={handleImagePick}
          />
        </MainInfoContainer>
        <SettingDetailsCard />
      </ScrollView>
    </Container>
  );
};

export default SettingsDetails;
