import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../../globals/Colors";


type d={
    children: any
}

const DetailsContainer = (props: d) => {
  return (
    <View style={styles.con}>
      {props.children}
    </View>
  );
};

export default DetailsContainer;

const styles = StyleSheet.create({
  con: {
    backgroundColor: colors.grey1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 8,
    marginVertical: 5,
  },
  
});
