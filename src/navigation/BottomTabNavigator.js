import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as ROUTES from "../constants/Routes";

import Orders from "../components/screens/orders";
import Shop from "../components/screens/shop";
import Home from "../components/screens/Home";
import SettingsNavigator from "../navigation/SettingsNavigator";
import { Ionicons } from "@expo/vector-icons";

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
          } else if (route.name === ROUTES.ORDERS_SCREEN) {
            icon = focused ? "card" : "card-outline";
          } else if (route.name === ROUTES.SHOP_SCREEN) {
            icon = focused ? "fast-food" : "fast-food-outline";
          } else if (route.name === ROUTES.HOME_SCREEN) {
            icon = focused ? "home" : "home-outline";
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
        name={ROUTES.ORDERS_SCREEN}
        component={Orders}
        options={{ title: "Orders" }}
      />
      <Tab.Screen
        name={ROUTES.SHOP_SCREEN}
        component={Shop}
        options={{ title: "Shop" }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={SettingsNavigator}
        options={{ title: "Settings" ,headerShown:false}}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
