import { StyleSheet, Text, View } from "react-native";
import React from "react";

type e = {
  text: String;
};
const ErrorDisplay = (props: e) => {
  return (
    <View style={styles.con}>
      <Text style={styles.txt}>{props.text}</Text>
    </View>
  );
};

export default ErrorDisplay;

const styles = StyleSheet.create({
  con: {
    backgroundColor: "red",
    borderRadius: 8,
  },
  txt: {
    color: "white",
    paddingVertical: 5,
  },
});
