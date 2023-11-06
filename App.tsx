import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import roboto_font from "./src/globals/Fonts";
import useLoadFonts from "./src/hooks/useLoad";
import { ActivityIndicator, Paragraph } from "react-native-paper";
import LoaderWrapper from "./src/components/LoaderWrapper";
import MainNavigationRoute from "./src/utils/MainNavigationRoute";

export default function App() {
  const { loadedFonts } = useLoadFonts();

  if (!loadedFonts) {
    return (
      <LoaderWrapper>
        <ActivityIndicator animating={true} color="green" size={"large"} />
        <Paragraph>loading resources...</Paragraph>
      </LoaderWrapper>
    );
  } else {
    return (
      <MainNavigationRoute/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontFamily: `${roboto_font.medium}`,
    fontSize: 16,
  },
});
