import React from "react";

import Icons from "react-native-vector-icons/Feather";
import { Button, Paragraph } from "react-native-paper";
import ButtonsStyles from "../../styles/Buttons";
import colors from "../../globals/Colors";
import { View } from "react-native";
import ResetPasswordSuccessStyles from "../../styles/ResetSuccessStyles";
import ResetWrapper from "../../components/auth/ResetWrapper";
import { useNavigation } from "@react-navigation/native";

const ResetPasswordSuccess = () => {
  const navigation = useNavigation();
  function goToLoginScreen() {
    navigation.replace("login");
  }
  return (
    <View style={ResetPasswordSuccessStyles.con}>
      <ResetWrapper>
        <Icons name="check-circle" size={70} color={colors.g_op6} />

        <Paragraph style={ResetPasswordSuccessStyles.txt}>
          You have Successfully reset your password. Please keep your password
          safe.
        </Paragraph>

        <Button
          mode="contained"
          style={[ButtonsStyles.contained, ResetPasswordSuccessStyles.btn]}
          labelStyle={ButtonsStyles.labelContained}
          onPress={goToLoginScreen}
        >
          go to login
        </Button>
      </ResetWrapper>
    </View>
  );
};

export default ResetPasswordSuccess;
