import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import ScrollerWrapper from "../../wrappers/ScrollerWrapper";
import TopScreenBar from "../../components/app/TopScreenBar";
import {
  Button,
  Card,
  FAB,
  IconButton,
  PaperProvider,
  Portal,
  Text,
} from "react-native-paper";
import colors from "../../globals/Colors";
import ButtonsStyles from "../../styles/Buttons";
import DashboardStyle from "../../styles/DashboardStyle";
import { useNavigation } from "@react-navigation/native";

import * as ImagePicker from "expo-image-picker";

import { Camera } from "expo-camera";

const ImageUpload = () => {
  const navigation = useNavigation();

  function transitToResults() {
    navigation.navigate("results");
  }

  // image functionalities:

  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const empty: String =
    "https://png.pngtree.com/png-vector/20221109/ourmid/pngtree-album-simple-art-card-vector-png-image_40961220.jpg";

  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  // camera
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Camera permission is required to take a picture.');
      }
    })();
  }, []);

  const takePicture = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <TopScreenBar title={"Upload Crop Image"} isBack={false} />
      <PaperProvider>
        <ScrollerWrapper>
          <Card mode="elevated" style={styles.con}>
            <Card.Cover
              source={{
                uri: `${selectedImage}` ? `${selectedImage}` : `${empty}`,
              }}
              resizeMode="contain"
            />
            <IconButton
              icon="camera"
              iconColor={colors.g_op7}
              size={28}
              style={styles.icon}
              onPress={pickImageAsync}
            />
            <Portal>
              <FAB.Group
                open={open}
                visible
                icon={open ? "close" : "camera"}
                actions={[
                  {
                    icon: "camera",
                    label: "take a picture",
                    onPress: takePicture,
                  },
                  {
                    icon: "upload",
                    label: "Upload Image",
                    onPress: pickImageAsync,
                  },
                ]}
                onStateChange={handleOpen}
                onPress={handleOpen}
              />
            </Portal>
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
      </PaperProvider>
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
  fab: {
    backgroundColor: colors.g_op7,
  },
  camera: {
    flex: 1,
  },
});
