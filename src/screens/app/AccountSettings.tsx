import { View } from "react-native";
import React, { useEffect, useState } from "react";
import TopScreenBar from "../../components/app/TopScreenBar";
import AccountStyle from "../../styles/AccountStyle";
import ScrollerWrapper from "../../wrappers/ScrollerWrapper";
import { Button, IconButton, TextInput } from "react-native-paper";
import colors from "../../globals/Colors";
import LoginStyles from "../../styles/LoginStyles";
import ButtonsStyles from "../../styles/Buttons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import { update_valSchema } from "../../utils/Validations";
import { Error } from "../../components/auth/Error";
import useUpdateProfile from "../../hooks/useUpdateProfile";
import SuccessDisplay from "../../components/auth/successDisplay";

const AccountSettings = () => {
  const navigation = useNavigation();
  const [dataFarmer, setData] = useState();

  async function getFarmerData() {
    try {
      const data = await AsyncStorage.getItem("farmer");
      if (data !== null) {
        setData(JSON.parse(data));
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  useEffect(() => {
    getFarmerData();
  }, []);

  // {"_id":"6537024e9492a8ccbd79545f","firstName":"daniel","lastName":"mawasha","email":"dkmawasha@gmail.com","address":"Polokwane City","createdAt":"2023-10-23T23:31:26.922Z","updatedAt":"2023-11-18T06:04:28.381Z","__v":0}

  // const data = JSON.stringify(dataFarmer);
  

  const _id = dataFarmer && dataFarmer._id;
  const firstName = dataFarmer && dataFarmer.firstName;
  const lastName = dataFarmer && dataFarmer.lastName;
  const email = dataFarmer && dataFarmer.email;
  const address = dataFarmer && dataFarmer.address;

  function logoutUser() {
    navigation.replace("auth");
  }

  const { isLoading, message, updateUserProfile } = useUpdateProfile();

  function handleUpdate(values) {
    updateUserProfile(_id, values);
    console.log(values);
  }

  return (
    <View style={AccountStyle.con}>
      <TopScreenBar title={"Account Settings"} />
      <ScrollerWrapper>
        <View style={AccountStyle.user}>
          <IconButton
            icon="account"
            iconColor={colors.g_op7}
            size={70}
            style={AccountStyle.bg}
          />
        </View>

        <Formik
          initialValues={{
            email: email,
            firstName: firstName,
            lastName: lastName,
            city: address,
          }}
          onSubmit={handleUpdate}
          validationSchema={update_valSchema}
        >
          {({ handleBlur, handleSubmit, handleChange, values, errors }) => (
            <View style={AccountStyle.input}>
              {message && <SuccessDisplay text={message} />}
              <TextInput
                label={`${firstName}` || "firstName"}
                autoCapitalize="none"
                mode="outlined"
                left={<TextInput.Icon icon={"account"} />}
                style={LoginStyles.inputs}
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                value={firstName || values.firstName}
              />
              {!firstName && errors.firstName && (
                <Error error={errors.firstName} />
              )}

              <TextInput
                label={`${lastName}` || "lastName"}
                autoCapitalize="none"
                mode="outlined"
                left={<TextInput.Icon icon={"account"} />}
                style={LoginStyles.inputs}
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                value={lastName || values.lastName}
              />
              {!lastName && errors.lastName && (
                <Error error={errors.lastName} />
              )}

              <TextInput
                label={`${email}` || "email"}
                autoCapitalize="none"
                mode="outlined"
                left={<TextInput.Icon icon={"email"} />}
                style={LoginStyles.inputs}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={email || values.email}
              />
              {!email && errors.email && <Error error={errors.email} />}

              <TextInput
                label={`${address}` || "City"}
                autoCapitalize="none"
                mode="outlined"
                left={<TextInput.Icon icon={"pin"} />}
                style={LoginStyles.inputs}
                onChangeText={handleChange("city")}
                onBlur={handleBlur("city")}
                value={address || values.city}
              />
              {!address && errors.city && <Error error={errors.city} />}

              <Button
                loading={isLoading}
                disabled={isLoading}
                mode="contained"
                style={ButtonsStyles.contained}
                labelStyle={ButtonsStyles.labelContained}
                onPress={handleSubmit}
              >
                update account
              </Button>

              <Button
                mode="outlined"
                style={[ButtonsStyles.outlined, AccountStyle.btnLg]}
                labelStyle={[ButtonsStyles.labelOutline, AccountStyle.btnLgt]}
                onPress={logoutUser}
              >
                logout
              </Button>
            </View>
          )}
        </Formik>
      </ScrollerWrapper>
    </View>
  );
};

export default AccountSettings;
