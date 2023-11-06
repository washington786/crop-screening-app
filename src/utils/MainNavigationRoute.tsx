import React from "react";
import MainNavigation from "../components/MainNavigation";
import SafeArea from "../wrappers/SafeArea";
import { StatusBar } from "react-native";
import AppStack from "./appStack/AppStack";

const MainNavigationRoute = () => {
  return (
    <SafeArea>
      <StatusBar barStyle={"light-content"} />
      <MainNavigation>
        <AppStack/>
      </MainNavigation>
    </SafeArea>
  );
};

export default MainNavigationRoute;
