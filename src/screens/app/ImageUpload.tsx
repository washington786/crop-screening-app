import { StyleSheet } from "react-native";
import React from "react";
import ScrollerWrapper from "../../wrappers/ScrollerWrapper";
import TopScreenBar from "../../components/app/TopScreenBar";
import { Button, Card, IconButton } from "react-native-paper";
import colors from "../../globals/Colors";
import ButtonsStyles from "../../styles/Buttons";
import DashboardStyle from "../../styles/DashboardStyle";
import { useNavigation } from "@react-navigation/native";

const ImageUpload = () => {
  const navigation = useNavigation();

  function transitToResults(){
    navigation.navigate("results");
  }

  return (
    <>
      <TopScreenBar title={"Upload Crop Image"} isBack={false} />
      <ScrollerWrapper>
        <Card mode="elevated" style={styles.con}>
          <Card.Cover
            source={{
              uri: `https://png.pngtree.com/png-vector/20221109/ourmid/pngtree-album-simple-art-card-vector-png-image_40961220.jpg`,
            }}
            resizeMode="contain"
          />
          <IconButton
            icon="camera"
            iconColor={colors.g_op7}
            size={28}
            style={styles.icon}
            onPress={() => console.log("Pressed")}
          />
        </Card>
        <Button
          mode="contained"
          style={[ButtonsStyles.contained, DashboardStyle.btn]}
          labelStyle={ButtonsStyles.labelContained}
          onPress={transitToResults}
        >
          submit
        </Button>
      </ScrollerWrapper>
    </>
  );
};

export default ImageUpload;

const styles = StyleSheet.create({
  con: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 5,
    elevation: 10,
    position: "relative",
  },
  icon: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: colors.white,
  },
});
