import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../../globals/Colors";
import { IconButton, Text } from "react-native-paper";
import roboto_font from "../../globals/Fonts";
import { useNavigation } from "@react-navigation/native";

type d = {
  title: String;
  isBack?: Boolean;
};

const TopScreenBar = (props: d) => {

  const navigation = useNavigation();

  function back() {
    navigation.goBack();
  }
  
  return (
    <View style={!props.isBack ? styles.back : styles.con}>
      {props.isBack && (
        <View style={styles.back}>
          <IconButton
            icon={"keyboard-backspace"}
            size={30}
            iconColor={colors.white}
            onPress={back}
          />
          <Text variant="headlineMedium" style={styles.txt}>
            {props.title}
          </Text>
        </View>
      )}
      <Text variant="headlineMedium" style={styles.txt}>
        {props.title}
      </Text>
    </View>
  );
};

export default TopScreenBar;

const styles = StyleSheet.create({
  con: {
    backgroundColor: colors.g_op7,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: colors.white,
    fontFamily: roboto_font.medium,
    fontSize: 22,
    flex: 1,
    textAlign: "center",
  },
  back: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.g_op7,
    paddingVertical: 10,
    flexDirection: "row",
  },
});
