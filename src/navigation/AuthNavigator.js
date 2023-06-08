import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Host } from "react-native-portalize";

import * as ROUTES from "../constants/Routes";
import Button from "../components/atoms/Button";
import DrawerNavigator from "./DrawerNavigator";
import Delivery from "../components/screens/Delivery";
import Deals from "../components/screens/Deals";
import ForgotPassword from "../components/screens/ForgotPassword";
import Map from "../components/screens/Map";
import OrdersDetails from "../components/screens/OrdersDetail";
import RestaurantDetails from "../components/screens/RestaurantDetails";
import SignIn from "../components/screens/SignIn";
import SettingsDetails from "../components/screens/SettingsDetails";
import Store from "../components/screens/Store";
import TrackOrder from "../components/screens/TrackOrder";
import FinishDelivery from "../components/screens/FinishDelivery";
import ItemDetails from "../components/screens/ItemDetails";
import Note from "../components/screens/Note";
import Order from "../components/screens/Order";

const Stack = createNativeStackNavigator();

function SignUp({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Shop Screen</Text>
      <Button title="Finish Shop" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Host>
        <Stack.Navigator>
          <Stack.Screen
            name={ROUTES.SIGN_IN_SCREEN}
            component={SignIn}
            options={{ title: "Sign in", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.FORGOT_PASSWORD_SCREEN}
            component={ForgotPassword}
            options={{ title: "Forgot Password", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.SIGN_UP_SCREEN}
            component={SignUp}
            options={{ title: "Sign up", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.DRAWER_NAVIGATOR}
            component={DrawerNavigator}
            options={{ title: "Home", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.SETTINGS_NAVIGATOR}
            component={SettingsDetails}
            options={{ title: "Setting Details", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.RESTAURANT_DETAILS}
            component={RestaurantDetails}
            options={{ title: "Restaurant", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.ORDERS_DETAILS_SCREEN}
            component={OrdersDetails}
            options={{ title: "Orders", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.DEALS_SCREEN}
            component={Deals}
            options={{ title: "Deals", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.DELIVERY_SCREEN}
            component={Delivery}
            options={{ title: "Delivery Screen", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.TRACK_ORDER}
            component={TrackOrder}
            options={{ title: "Track Order", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.MAP}
            component={Map}
            options={{ title: "Track Order", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.FINISH_DELIVERY}
            component={FinishDelivery}
            options={{ title: "Finish Order", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.STORE_SCREEN}
            component={Store}
            options={{ title: "Store Screen", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.ITEM_DETAIL_SCREEN}
            component={ItemDetails}
            options={{ title: "Item Details", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.NOTE}
            component={Note}
            options={{ title: "Leave a note", headerShown: true }}
          />
          <Stack.Screen
            name={ROUTES.ORDER_SCREEN}
            component={Order}
            options={{ title: "Your Order", headerShown: true }}
          />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
};

export default AuthNavigator;
