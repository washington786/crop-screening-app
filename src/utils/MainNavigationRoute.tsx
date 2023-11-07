import React from "react";
import MainNavigation from "../components/MainNavigation";
import SafeArea from "../wrappers/SafeArea";
import { StatusBar } from "react-native";
import AppStack from "./appStack/AppStack";
import colors from "../globals/Colors";

const MainNavigationRoute = () => {
  return (
    <SafeArea>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.g_op7}/>
      <MainNavigation>
        <AppStack/>
      </MainNavigation>
    </SafeArea>
  );
};

export default MainNavigationRoute;
