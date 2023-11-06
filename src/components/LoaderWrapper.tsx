import { StyleSheet, View } from "react-native";
import React from "react";

type loader = {
  children: any;
};
const LoaderWrapper = (props: loader) => {
  return <View style={styles.con}>{props.children}</View>;
};

export default LoaderWrapper;

const styles = StyleSheet.create({
  con: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flex: 1,
  },
});
