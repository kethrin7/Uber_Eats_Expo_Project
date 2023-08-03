import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";

import * as ROUTES from "../constants/Routes";
import Browse from "../components/screens/Browse";
import Home from "../components/screens/Home";
import Shop from "../components/screens/ShopScreen";
import SettingsNavigator from "../navigation/SettingsNavigator";
import Grocery from "../components/screens/Grocery";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ color, size, focused }) => {
          let icon;

          if (route.name === ROUTES.HOME_SCREEN) {
            icon = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.BROWSE_SCREEN) {
            icon = focused ? "card" : "card-outline";
          } else if (route.name === ROUTES.GROCERY_SCREEN) {
            icon = focused ? "shopping" : "shopping-outline";
            return (
              <MaterialCommunityIcons name={icon} size={20} color={color} />
            );
          } else if (route.name === ROUTES.SHOP_SCREEN) {
            icon = focused ? "fast-food" : "fast-food-outline";
          } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
            icon = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={icon} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_SCREEN}
        component={Home}
        options={{ title: "Home", headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.BROWSE_SCREEN}
        component={Browse}
        options={{ title: "Browse", headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.GROCERY_SCREEN}
        component={Grocery}
        options={{ title: "Grocery", headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.SHOP_SCREEN}
        component={Shop}
        options={{ title: "Shop", headerShown: false }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{ title: "Settings", headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
