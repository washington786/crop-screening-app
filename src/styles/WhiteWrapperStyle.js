import colors from "../globals/Colors";
import { StyleSheet } from "react-native";

const WhiteWrapperStyle = StyleSheet.create({
  con: (margin) => ({
    flex: 1,
    backgroundColor: colors.white,
    marginTop: margin,
    borderTopLeftRadius:120,
    paddingVertical:30,
    paddingHorizontal:20,
    alignItems: "center"
  }),
});

export default WhiteWrapperStyle;
