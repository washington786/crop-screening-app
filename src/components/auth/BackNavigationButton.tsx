import { StyleSheet, View } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import colors from "../../globals/Colors";
import { useNavigation } from "@react-navigation/native";

const BackNavigationButton = () => {

  const navigation = useNavigation();
  
  function goBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.con}>
      <IconButton
        icon="keyboard-backspace"
        iconColor={colors.white}
        size={30}
        onPress={goBack}
      />
    </View>
  );
};

export default BackNavigationButton;

const styles = StyleSheet.create({
  con: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
  },
});
