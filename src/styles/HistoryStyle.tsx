import { StyleSheet } from "react-native";
import colors from "../globals/Colors";

const HistoryStyle = StyleSheet.create({
  con: {
    flex: 1,
  },
  user: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 35,
  },
  bg: {
    backgroundColor: colors.grey2,
    elevation: 2,
  },
  input: {
    marginHorizontal: 12,
  },
  btnLgt: {
    color: "red",
  },
  btnLg: {
    borderColor: "red",
  },
});

export default HistoryStyle;
