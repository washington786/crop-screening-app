import { Dimensions, StyleSheet } from "react-native";
import colors from "../globals/Colors";

const width = Dimensions.get("window").width;

const ResetPasswordSuccessStyles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    textAlign: "center",
    paddingVertical: 8,
  },
  btn: {
    width: width*0.8,
    marginHorizontal: 10
  },
});

export default ResetPasswordSuccessStyles;
