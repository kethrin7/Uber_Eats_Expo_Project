import { createDrawerNavigator } from "@react-navigation/drawer";

import * as ROUTES from "../constants/Routes";
import Browse from "../components/screens/Browse";
import Shop from "../components/screens/ShopScreen";
import Settings from "../components/screens/Settings";
import BottomTabNavigator from "./BottomTabNavigator";

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
        name={ROUTES.BROWSE_SCREEN}
        component={Browse}
        options={{ title: "Browse" }}
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
