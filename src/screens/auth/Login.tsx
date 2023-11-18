import React from "react";
import AuthWrapper from "../../components/AuthWrapper";
import AuthWhiteWrapper from "../../components/auth/AuthWhiteWrapper";
import LogoWrapper from "../../components/auth/LogoWrapper";
import { Button, Text, TextInput } from "react-native-paper";
import InputWrapper from "../../components/auth/InputWrapper";
import ButtonsStyles from "../../styles/Buttons";
import LoginStyles from "../../styles/LoginStyles";
import { useNavigation } from "@react-navigation/native";

import { Formik } from "formik";
import { login_valSchema } from "../../utils/Validations";
import { Error } from "../../components/auth/Error";
import useLogin from "../../hooks/useLogin";
import SuccessDisplay from "../../components/auth/successDisplay";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const navigation = useNavigation();

  const { isLoading, loginUser, message } = useLogin();

  function createAccount() {
    navigation.navigate("register");
  }

  function transitResetPassword() {
    navigation.navigate("resetPassword");
  }

  async function setItem(email) {
    return await AsyncStorage.setItem("user_email", JSON.stringify(email));
  }

  function handleLoginClick(values: any) {
    // console.log(message)
    setItem(values.email);
    loginUser(values);
  }

  // errors

  return (
    <AuthWrapper>
      <AuthWhiteWrapper marginTop={120}>
        <LogoWrapper />

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleLoginClick}
          validationSchema={login_valSchema}
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
              <Text
                variant="titleMedium"
                onPress={transitResetPassword}
                style={LoginStyles.forgotBtnTxt}
              >
                Forgot Password?
              </Text>
              <Button
                loading={isLoading}
                disabled={isLoading}
                mode="contained"
                style={ButtonsStyles.contained}
                labelStyle={ButtonsStyles.labelContained}
                onPress={handleSubmit}
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
          )}
        </Formik>
      </AuthWhiteWrapper>
    </AuthWrapper>
  );
};

export default Login;
