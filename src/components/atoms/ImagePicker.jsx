import { View, Text } from "react-native";
import React from "react";
import * as ImgPicker from "expo-image-picker";
import styled from "styled-components";

const Container = styled.Pressable``;

const ImagePicker = ({
  title,
  callback,
  children,
  type = "Bold",
  fontSize,
  margin,
  color,
  ...otherProps
}) => {
  const onPressHandler = async () => {
    const res = await ImgPicker.getMediaLibraryPermissionsAsync();
    if (res.granted) {
      const launchRes = await ImgPicker.launchImageLibraryAsync();
      callback(launchRes);
    } else {
      const requestRes = await ImgPicker.requestMediaLibraryPermissionsAsync();
      if (requestRes) {
        const response = await ImgPicker.launchImageLibraryAsync();
        callback(response.uri);
      }
    }
  };

  return (
    <Container onPress={onPressHandler}>
      {title && <Text>{title}</Text>}
      {children}
    </Container>
  );
};

export default ImagePicker;
