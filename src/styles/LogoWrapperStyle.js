import { StyleSheet } from "react-native";

const LogoWrapperStyle = StyleSheet.create({
  img: (width, height) => ({
    objectFit: "contain",
    height: height,
    width: width,
    marginTop: 40
  }),
});

export default LogoWrapperStyle;
