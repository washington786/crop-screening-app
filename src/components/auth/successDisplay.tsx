import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../globals/Colors";

type e = {
  text: String;
};
const SuccessDisplay = (props: e) => {
  return (
    <View style={styles.con}>
      <Text style={styles.txt}>{props.text}</Text>
    </View>
  );
};

export default SuccessDisplay;

const styles = StyleSheet.create({
  con: {
    backgroundColor: colors.g_op7,
    borderRadius: 8,
    paddingVertical:5,
    paddingHorizontal:8
  },
  txt: {
    color: "white",
    paddingVertical:5
  },
});
