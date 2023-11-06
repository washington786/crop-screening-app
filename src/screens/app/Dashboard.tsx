import { View, Text } from "react-native";
import React from "react";
import ScrollerWrapper from "../../wrappers/ScrollerWrapper";
import DashboardCarousel from "../../components/app/DashboardCarousel";
import DashboardStyle from "../../styles/DashboardStyle";
import { Button } from "react-native-paper";
import ButtonsStyles from "../../styles/Buttons";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {
  const navigation = useNavigation();
  function transitToUpload() {
    navigation.navigate("upload");
  }
  return (
    <ScrollerWrapper>
      <View style={DashboardStyle.con}>
        <DashboardCarousel />
      </View>

      <Button
        mode="contained"
        icon="barcode-scan"
        style={[ButtonsStyles.contained, DashboardStyle.btn]}
        labelStyle={ButtonsStyles.labelContained}
        onPress={transitToUpload}
      >
        go to scan crop
      </Button>
    </ScrollerWrapper>
  );
};

export default Dashboard;
