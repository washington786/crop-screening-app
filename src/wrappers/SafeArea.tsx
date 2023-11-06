import { SafeAreaView } from "react-native";
import React from "react";
import SafeAreaStyle from "../styles/SafeAreaStyle";

type Safe = {
  children: any | unknown;
};

const SafeArea = (props: Safe) => {
  return (
    <SafeAreaView style={SafeAreaStyle.con}>
      {props.children}
    </SafeAreaView>
  );
};

export default SafeArea;
