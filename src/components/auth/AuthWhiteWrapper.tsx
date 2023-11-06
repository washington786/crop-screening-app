import { View } from "react-native";
import React from "react";
import WhiteWrapperStyle from "../../styles/WhiteWrapperStyle";

type wrap = {
  children: any;
  marginTop: number;
};

const AuthWhiteWrapper = (props: wrap) => {
  return <View style={WhiteWrapperStyle.con(props.marginTop)}>{props.children}</View>;
};

export default AuthWhiteWrapper;

