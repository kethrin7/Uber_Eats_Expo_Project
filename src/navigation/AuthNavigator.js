import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Button from "../components/atoms/Button";
import * as ROUTES from "../constants/Routes";
import SignIn from "../components/screens/SignIn";
import ForgotPassword from "../components/screens/ForgotPassword";
import BottomTabNavigator from "./BottomTabNavigator";
import SettingsDetails from "../components/screens/SettingsDetails";
import DrawerNavigator from "./DrawerNavigator";
import RestaurantDetails from "../components/screens/RestaurantDetails";
import Deals from "../components/screens/Deals";
import { Host } from "react-native-portalize";


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
            options={{ title: "Forgot Password", headerShown: true }}
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
            options={{ title: "Restaurant", headerShown: false }}
          />
          <Stack.Screen
            name={ROUTES.DEALS_SCREEN}
            component={Deals}
            options={{ title: "Deals", headerShown: true }}
          />
        </Stack.Navigator>
      </Host>
    </NavigationContainer>
  );
};

export default AuthNavigator;
