import { StyleSheet } from "react-native";
import React from "react";
import AuthWrapper from "../../components/AuthWrapper";
import AuthWhiteWrapper from "../../components/auth/AuthWhiteWrapper";
import LogoWrapper from "../../components/auth/LogoWrapper";
import InputWrapper from "../../components/auth/InputWrapper";
import { Button, TextInput } from "react-native-paper";
import ButtonsStyles from "../../styles/Buttons";
import LoginStyles from "../../styles/LoginStyles";
import { useNavigation } from "@react-navigation/native";

const ResetPasswordAccess = () => {
  const navigation = useNavigation();

  function successTransit() {
    navigation.replace("resetSuccess");
  }
  return (
    <AuthWrapper>
      <AuthWhiteWrapper marginTop={140}>
        <LogoWrapper />
        <InputWrapper>
          <TextInput
            label="Password"
            autoCapitalize="none"
            mode="outlined"
            secureTextEntry
            left={<TextInput.Icon icon={"lock"} />}
            style={LoginStyles.inputs}
          />

          <TextInput
            label="Confirm Password"
            autoCapitalize="none"
            mode="outlined"
            secureTextEntry
            left={<TextInput.Icon icon={"lock"} />}
            style={LoginStyles.inputs}
          />

          <Button
            mode="contained"
            style={ButtonsStyles.contained}
            labelStyle={ButtonsStyles.labelContained}
            onPress={successTransit}
          >
            submit
          </Button>
        </InputWrapper>
      </AuthWhiteWrapper>
    </AuthWrapper>
  );
};

export default ResetPasswordAccess;

const styles = StyleSheet.create({});
