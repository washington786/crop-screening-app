import React, { useEffect, useState } from "react";
import AuthWrapper from "../../components/AuthWrapper";
import BackNavigationButton from "../../components/auth/BackNavigationButton";
import AuthWhiteWrapper from "../../components/auth/AuthWhiteWrapper";
import LogoWrapper from "../../components/auth/LogoWrapper";
import InputWrapper from "../../components/auth/InputWrapper";
import { Button, Paragraph, Text } from "react-native-paper";
import ButtonsStyles from "../../styles/Buttons";
import OTPTextView from "react-native-otp-textinput";
import colors from "../../globals/Colors";
import OTPStyles from "../../styles/OTPStyles";
import { useNavigation, useRoute } from "@react-navigation/native";

function ResetPasswordOTP() {
  const navigation = useNavigation()
  const [otp, setOTp] = useState<String>();

  // timer: 30minutes * 60 seconds/minute = 1800
  const initialTime = 1800;

  const [time, setTime] = useState(initialTime);

  const { email } = useRoute().params;

  function handleOtp(code: String) {
    setOTp(code);
  }

  function verifyOtp() {
    console.log(otp);
    navigation.replace("resetAccess");
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <AuthWrapper>
      <BackNavigationButton />
      <AuthWhiteWrapper marginTop={100}>
        <LogoWrapper />
        <InputWrapper>
          <Paragraph style={OTPStyles.txt}>
            Please enter One Time Pin sent to this mail{" "}
            <Text style={OTPStyles.email}>{`${email}`}</Text>
          </Paragraph>

          <Button
            labelStyle={OTPStyles.label}
            mode="text"
            onPress={() => {
              console.log("Resent OTP");
            }}
          >
            Resend One Time Pin(OTP).
          </Button>
          <OTPTextView
            autoFocus={true}
            inputCount={5}
            handleTextChange={handleOtp}
            tintColor={colors.g_op7}
            offTintColor={colors.grey2}
          />
          <Paragraph style={OTPStyles.txt}>
            OTP expires in {minutes.toString().padStart(2, "0")}{" "}
            {seconds.toString().padStart(2, "0")}
          </Paragraph>
          <Button
            mode="contained"
            style={ButtonsStyles.contained}
            labelStyle={ButtonsStyles.labelContained}
            onPress={verifyOtp}
          >
            Verify OTP
          </Button>
        </InputWrapper>
      </AuthWhiteWrapper>
    </AuthWrapper>
  );
}

export default ResetPasswordOTP;
