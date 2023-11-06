import { StyleSheet } from "react-native";
import roboto_font from "../globals/Fonts";
import colors from "../globals/Colors";

const OTPStyles = StyleSheet.create({
  txt: {
    fontFamily: roboto_font.thin,
    color: colors.grey9,
    textAlign:"center"
  },
  email: {
    color: colors.grey6,
    fontFamily: roboto_font.medium
  },
  label:{
    color: colors.g_op5,
    textAlign:"auto"
  }
});

export default OTPStyles;
