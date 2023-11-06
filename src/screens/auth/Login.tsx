import React from "react";
import AuthWrapper from "../../components/AuthWrapper";
import AuthWhiteWrapper from "../../components/auth/AuthWhiteWrapper";
import LogoWrapper from "../../components/auth/LogoWrapper";
import { Button, Text, TextInput } from "react-native-paper";
import InputWrapper from "../../components/auth/InputWrapper";
import ButtonsStyles from "../../styles/Buttons";
import LoginStyles from "../../styles/LoginStyles";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  function createAccount() {
    navigation.navigate("register");
  }
  function transitResetPassword() {
    navigation.navigate("resetPassword");
  }
  function handleLoginClick(){
    navigation.replace("app");
  }
  return (
    <AuthWrapper>
      <AuthWhiteWrapper marginTop={120}>
        <LogoWrapper />
        <InputWrapper>
          <TextInput
            label="Email"
            autoCapitalize="none"
            mode="outlined"
            left={<TextInput.Icon icon={"email"} />}
            style={LoginStyles.inputs}
          />
          <TextInput
            label="Password"
            autoCapitalize="none"
            mode="outlined"
            secureTextEntry
            left={<TextInput.Icon icon={"lock"} />}
            style={LoginStyles.inputs}
          />
          <Text
            variant="titleMedium"
            onPress={transitResetPassword}
            style={LoginStyles.forgotBtnTxt}
          >
            Forgot Password?
          </Text>
          <Button
            mode="contained"
            style={ButtonsStyles.contained}
            labelStyle={ButtonsStyles.labelContained}
            onPress={handleLoginClick}
          >
            login
          </Button>
          <Button
            mode="outlined"
            style={ButtonsStyles.outlined}
            labelStyle={ButtonsStyles.labelOutline}
            onPress={createAccount}
          >
            create an account
          </Button>
        </InputWrapper>
      </AuthWhiteWrapper>
    </AuthWrapper>
  );
};

export default Login;
