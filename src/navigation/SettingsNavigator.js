import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as ROUTES from "../constants/Routes";
import SettingsDetails from "../components/screens/SettingsDetails";
import Settings from "../components/screens/Settings";

const Stack = createNativeStackNavigator();

function SettingsNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name={ROUTES.SETTINGS_SCREEN}
        component={Settings}
        screenOptions={{ title:"Settings" }}
      />
      <Stack.Screen
        name={ROUTES.SETTINGS_DETAILS}
        component={SettingsDetails}
        options={{ title: "Setting Details" }}
      />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;
