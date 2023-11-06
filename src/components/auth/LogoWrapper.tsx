import { Image, StyleSheet } from "react-native";
import React from "react";
import LogoWrapperStyle from "../../styles/LogoWrapperStyle";

const LogoWrapper = () => {
  return (
    <Image
      source={require("../../../assets/logo.png")}
      style={LogoWrapperStyle.img(100, 100)}
    />
  );
};

export default LogoWrapper;

const styles = StyleSheet.create({
  img: {},
});
