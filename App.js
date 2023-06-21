import React, { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import AuthNavigator from "./src/navigation/AuthNavigator";
import * as SplashScreen from "expo-splash-screen";
import { PaperProvider } from "react-native-paper";
import UserProvider from "./src/constants/UserProvider";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Uber-Bold": require("./assets/fonts/UberMoveBold.otf"),
    "Uber-Medium": require("./assets/fonts/UberMoveMedium.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (fontsLoaded) onLayoutRootView();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserProvider>
      <PaperProvider>
        <AuthNavigator />
      </PaperProvider>
    </UserProvider>
  );
}
