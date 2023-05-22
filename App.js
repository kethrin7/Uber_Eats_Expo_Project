import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import UberMoveBold from "./assets/fonts/UberMoveBold.otf";
import UberMoveMedium from "./assets/fonts/UberMoveMedium.otf";
import AuthNavigator from "./src/navigation/AuthNavigator";
import SplashScreen from "react-native-splash-screen";
import { PaperProvider } from "react-native-paper";

export default function App() {
  useEffect(() => {
    const loadFonts = async () => {
      await SplashScreen.preventAutoHideAsync(); 
      await Promise.all(
        [UberMoveBold, UberMoveMedium].map((font) => font.loadAsync(font))
      );
      SplashScreen.hideAsync();
    };
    loadFonts();
  }, []);

  const [fontsLoaded] = useFonts({
    UberMoveBold,
    UberMoveMedium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider>
      <AuthNavigator />
    </PaperProvider>
  );
}
