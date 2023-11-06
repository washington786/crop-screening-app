import React from "react";
import AuthWrapper from "../../components/AuthWrapper";
import AuthWhiteWrapper from "../../components/auth/AuthWhiteWrapper";
import LogoWrapper from "../../components/auth/LogoWrapper";
import InputWrapper from "../../components/auth/InputWrapper";
import { Button, TextInput } from "react-native-paper";
import ButtonsStyles from "../../styles/Buttons";
import LoginStyles from "../../styles/LoginStyles";
import BackNavigationButton from "../../components/auth/BackNavigationButton";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();

  function handleLoginClick(){
    navigation.navigate("login");
  }
  function handleRegisterClick(){
    navigation.replace("app");
  }

  return (
    <AuthWrapper>
      <BackNavigationButton/>
      <AuthWhiteWrapper marginTop={100}>
        <LogoWrapper />
        <InputWrapper>

          <TextInput
            label="FirstName"
            autoCapitalize="none"
            mode="outlined"
            left={<TextInput.Icon icon={"account"} />}
            style={LoginStyles.inputs}
          />

          <TextInput
            label="LastName"
            autoCapitalize="none"
            mode="outlined"
            left={<TextInput.Icon icon={"account"} />}
            style={LoginStyles.inputs}
          />
          
          <TextInput
            label="Email"
            autoCapitalize="none"
            mode="outlined"
            left={<TextInput.Icon icon={"email"} />}
            style={LoginStyles.inputs}
          />

          <TextInput
            label="City"
            autoCapitalize="none"
            mode="outlined"
            left={<TextInput.Icon icon={"pin"} />}
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
            onPress={handleRegisterClick}
          >
            REGISTER
          </Button>

          <Button
            mode="outlined"
            style={ButtonsStyles.outlined}
            labelStyle={ButtonsStyles.labelOutline}
            onPress={handleLoginClick}
          >
            login into account
          </Button>

        </InputWrapper>
      </AuthWhiteWrapper>
    </AuthWrapper>
  );
};

export default Register;
