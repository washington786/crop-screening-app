import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import InputWrapper from "../../components/auth/InputWrapper";
import LogoWrapper from "../../components/auth/LogoWrapper";
import AuthWhiteWrapper from "../../components/auth/AuthWhiteWrapper";
import BackNavigationButton from "../../components/auth/BackNavigationButton";
import AuthWrapper from "../../components/AuthWrapper";
import ButtonsStyles from "../../styles/Buttons";
import LoginStyles from "../../styles/LoginStyles";
import { useNavigation } from "@react-navigation/native";

const ResetPassword = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<String>();

  function verifyOneTimePinTransition() {
    navigation.navigate("otp",{email});
  }

  function handleEmail(email: String) {
    setEmail(email);
  }

  return (
    <AuthWrapper>
      <BackNavigationButton />
      <AuthWhiteWrapper marginTop={100}>
        <LogoWrapper />
        <InputWrapper>
          <TextInput
            label="Email"
            autoCapitalize="none"
            mode="outlined"
            left={<TextInput.Icon icon={"email"} />}
            style={LoginStyles.inputs}
            onChangeText={handleEmail}
          />

          <Button
            mode="contained"
            style={ButtonsStyles.contained}
            labelStyle={ButtonsStyles.labelContained}
            onPress={verifyOneTimePinTransition}
          >
            submit
          </Button>
          
        </InputWrapper>
      </AuthWhiteWrapper>
    </AuthWrapper>
  );
};

export default ResetPassword;
