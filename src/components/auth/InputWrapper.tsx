import { StyleSheet, Text, View } from "react-native";
import React from "react";

type input = {
  children: any;
};
const InputWrapper = (props: input) => {
  return <View style={styles.input}>{props.children}</View>;
};

export default InputWrapper;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    marginHorizontal: 12,
    marginVertical:15
  },
});
