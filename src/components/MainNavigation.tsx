import React from "react";
import { NavigationContainer } from "@react-navigation/native";

type nav = {
  children: any;
};
const MainNavigation = (props: nav) => {
  return <NavigationContainer>{props.children}</NavigationContainer>;
};

export default MainNavigation;
