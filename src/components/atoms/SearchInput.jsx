import { StyleSheet ,View, Text, TextInput } from 'react-native'
import React from 'react'
import {Octicons} from "@expo/vector-icons"

const SearchInput = ({value, onChangeText, ...otherProps}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Octicons name="search" size={18} color="black" />
      </View>
      <TextInput
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="food,shopping,drinks,ect"
        style={styles.input}
        {...otherProps}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 44,
    backgroundColor: "#eeeeee",
    borderRadius: 99,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal:22
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginRight: 8,
    marginLeft: 15,
  },
  input: {
    width: "100%",
  },
});

export default SearchInput

