import { createDrawerNavigator } from "@react-navigation/drawer";

import Orders from "../components/screens/orders";
import Shop from "../components/screens/shop";
import Home from "../components/screens/Home";
import Settings from "../components/screens/Settings";
import BottomTabNavigator from "./BottomTabNavigator";

import * as ROUTES from "../constants/Routes";
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name={ROUTES.BOTTOM_TAB_NAV}
        component={BottomTabNavigator}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name={ROUTES.ORDERS_SCREEN}
        component={Orders}
        options={{ title: "Orders" }}
      />
      <Drawer.Screen
        name={ROUTES.SHOP_SCREEN}
        component={Shop}
        options={{ title: "Shop" }}
      />
      <Drawer.Screen
        name={ROUTES.SETTINGS_NAVIGATOR}
        component={Settings}
        options={{ title: "Settings" }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerNavigator;
