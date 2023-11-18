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

import { Formik } from "formik";
import { register_valSchema } from "../../utils/Validations";
import { Error } from "../../components/auth/Error";
import useRegister from "../../hooks/useRegister";
import ErrorDisplay from "../../components/auth/ErrorDisplay";

const Register = () => {
  const navigation = useNavigation();

  const { isLoading, registerUser, message } = useRegister();

  function handleLoginClick() {
    navigation.navigate("login");
  }

  function handleRegisterClick(values: any) {
    registerUser(values);
  }

  return (
    <AuthWrapper>
      <BackNavigationButton />
      <AuthWhiteWrapper marginTop={100}>
        <LogoWrapper />
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            city: "",
            password: "",
            confirmPassword: "",
            cd,
          }}
          onSubmit={handleRegisterClick}
          validationSchema={register_valSchema}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            errors,
            values,
            touched,
          }) => (
            <InputWrapper>
            {message && <ErrorDisplay text={message} />}
              <TextInput
                label="FirstName"
                autoCapitalize="none"
                mode="outlined"
                left={<TextInput.Icon icon={"account"} />}
                style={LoginStyles.inputs}
                onBlur={handleBlur("firstName")}
                onChangeText={handleChange("firstName")}
                value={values.firstName}
              />
              {touched.firstName && errors.firstName && (
                <Error error={errors.firstName} />
              )}
              <TextInput
                label="LastName"
                autoCapitalize="none"
                mode="outlined"
                left={<TextInput.Icon icon={"account"} />}
                style={LoginStyles.inputs}
                onBlur={handleBlur("lastName")}
                onChangeText={handleChange("lastName")}
                value={values.lastName}
              />
              {touched.lastName && errors.lastName && (
                <Error error={errors.lastName} />
              )}
              <TextInput
                label="Email"
                autoCapitalize="none"
                mode="outlined"
                left={<TextInput.Icon icon={"email"} />}
                style={LoginStyles.inputs}
                onBlur={handleBlur("email")}
                onChangeText={handleChange("email")}
                value={values.email}
                secureTextEntry={false}
              />
              {touched.email && errors.email && <Error error={errors.email} />}
              <TextInput
                label="City"
                autoCapitalize="none"
                mode="outlined"
                left={<TextInput.Icon icon={"pin"} />}
                style={LoginStyles.inputs}
                onBlur={handleBlur("city")}
                onChangeText={handleChange("city")}
                value={values.city}
              />
              {touched.city && errors.city && <Error error={errors.city} />}
              <TextInput
                label="Password"
                autoCapitalize="none"
                mode="outlined"
                secureTextEntry
                left={<TextInput.Icon icon={"lock"} />}
                style={LoginStyles.inputs}
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
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
                onBlur={handleBlur("confirmPassword")}
                onChangeText={handleChange("confirmPassword")}
                value={values.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Error error={errors.confirmPassword} />
              )}

              <Button
                mode="contained"
                loading={isLoading}
                disabled={isLoading}
                style={ButtonsStyles.contained}
                labelStyle={ButtonsStyles.labelContained}
                onPress={handleSubmit}
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
          )}
        </Formik>
      </AuthWhiteWrapper>
    </AuthWrapper>
  );
};

export default Register;
