import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../../screens/app/Dashboard";
import AccountSettings from "../../screens/app/AccountSettings";
import History from "../../screens/app/History";

import FeatherIcons from "react-native-vector-icons/Feather";
import colors from "../../globals/Colors";
import HistoryStack from "./HistoryStack";
import HomeStack from "./HomeStack";

const appTab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <appTab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.g_op6,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: colors.grey5,
        tabBarStyle:{
            backgroundColor: colors.grey1,
            // position:"absolute",
            // left:8,
            // right:8,
            // bottom:10,
            padding:10
        }
      }}
    >
      <appTab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarIcon: (colors) => (
            <FeatherIcons name="home" size={26} color={colors.color} />
          ),
          
        }}
      />
      <appTab.Screen
        name="history"
        component={HistoryStack}
        options={{
          tabBarIcon: (colors) => (
            <FeatherIcons name="clock" size={26} color={colors.color} />
          ),
        }}
      />
      <appTab.Screen
        name="account"
        component={AccountSettings}
        options={{
          tabBarIcon: (colors) => (
            <FeatherIcons name="settings" size={26} color={colors.color} />
          ),
        }}
      />
    </appTab.Navigator>
  );
};

export default BottomNavigation;
