import React from "react";
import { Button, TextInput } from "react-native-paper";
import InputWrapper from "../../components/auth/InputWrapper";
import LogoWrapper from "../../components/auth/LogoWrapper";
import AuthWhiteWrapper from "../../components/auth/AuthWhiteWrapper";
import BackNavigationButton from "../../components/auth/BackNavigationButton";
import AuthWrapper from "../../components/AuthWrapper";
import ButtonsStyles from "../../styles/Buttons";
import LoginStyles from "../../styles/LoginStyles";
import { Formik } from "formik";
import { resetPassword_valSchema } from "../../utils/Validations";
import { Error } from "../../components/auth/Error";
import useResetPasswordEmail from "../../hooks/useResetPasswordEmail";
import SuccessDisplay from "../../components/auth/successDisplay";

const ResetPassword = () => {
  const { isLoading, resetUserPassword, message } = useResetPasswordEmail();

  function verifyOneTimePinTransition(value) {
    resetUserPassword(value);
    // navigation.navigate("otp", { email });
  }

  return (
    <AuthWrapper>
      <BackNavigationButton />
      <AuthWhiteWrapper marginTop={100}>
        <LogoWrapper />

        <Formik
          initialValues={{ email: "" }}
          onSubmit={verifyOneTimePinTransition}
          validationSchema={resetPassword_valSchema}
        >
          {({
            handleBlur,
            handleSubmit,
            handleChange,
            values,
            errors,
            touched,
          }) => (
            <InputWrapper>
              {message && <SuccessDisplay text={message} />}
              <TextInput
                label="Email"
                autoCapitalize="none"
                mode="outlined"
                left={<TextInput.Icon icon={"email"} />}
                style={LoginStyles.inputs}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {touched.email && errors.email && <Error error={errors.email} />}

              <Button
                loading={isLoading}
                disabled={isLoading}
                mode="contained"
                style={ButtonsStyles.contained}
                labelStyle={ButtonsStyles.labelContained}
                onPress={handleSubmit}
              >
                submit
              </Button>
            </InputWrapper>
          )}
        </Formik>
      </AuthWhiteWrapper>
    </AuthWrapper>
  );
};

export default ResetPassword;
