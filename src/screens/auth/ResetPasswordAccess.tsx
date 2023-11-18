import { StyleSheet } from "react-native";
import React from "react";
import AuthWrapper from "../../components/AuthWrapper";
import AuthWhiteWrapper from "../../components/auth/AuthWhiteWrapper";
import LogoWrapper from "../../components/auth/LogoWrapper";
import InputWrapper from "../../components/auth/InputWrapper";
import { Button, TextInput } from "react-native-paper";
import ButtonsStyles from "../../styles/Buttons";
import LoginStyles from "../../styles/LoginStyles";
import { useRoute } from "@react-navigation/native";
import useConfirmPasswords from "../../hooks/useConfirmPasswords";
import { Formik } from "formik";
import { confirmPasswords_valSchema } from "../../utils/Validations";
import { Error } from "../../components/auth/Error";
import SuccessDisplay from "../../components/auth/successDisplay";

const ResetPasswordAccess = () => {
  // const navigation = useNavigation();

  const { isLoading, changePassword, message } = useConfirmPasswords();

  const {email} = useRoute().params;

  function successTransit(values) {
    const { password, confirmPassword } = values;
    const user_data = { email, password, confirmPassword };
    changePassword(user_data);
  }

  return (
    <AuthWrapper>
      <AuthWhiteWrapper marginTop={140}>
        <LogoWrapper />
        <Formik
          initialValues={{ confirmPassword: "", password: "" }}
          onSubmit={successTransit}
          validationSchema={confirmPasswords_valSchema}
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
                label="Password"
                autoCapitalize="none"
                mode="outlined"
                secureTextEntry
                left={<TextInput.Icon icon={"lock"} />}
                style={LoginStyles.inputs}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {touched.password && errors.password && (
                <Error error={errors.password} />
              )}
              <TextInput
                label="Confirm Password"
                autoCapitalize="none"
                mode="outlined"
                secureTextEntry
                left={<TextInput.Icon icon={"lock"} />}
                style={LoginStyles.inputs}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Error error={errors.confirmPassword} />
              )}

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

export default ResetPasswordAccess;

const styles = StyleSheet.create({});
