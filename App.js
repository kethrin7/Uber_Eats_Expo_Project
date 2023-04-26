import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import AuthNavigator from "./src/navigation/AuthNavigator"


const Stack = createNativeStackNavigator();

export default function App () {
  return <AuthNavigator/>
}
