import { View } from "react-native";
import React from "react";
import TopScreenBar from "../../components/app/TopScreenBar";
import AccountStyle from "../../styles/AccountStyle";
import ScrollerWrapper from "../../wrappers/ScrollerWrapper";
import { Button, IconButton, TextInput } from "react-native-paper";
import colors from "../../globals/Colors";
import LoginStyles from "../../styles/LoginStyles";
import ButtonsStyles from "../../styles/Buttons";
import { useNavigation } from "@react-navigation/native";

const AccountSettings = () => {
  const navigation = useNavigation();
  function logoutUser(){
    navigation.replace("auth");
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
        
          <View style={AccountStyle.input}>
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

            <Button
              mode="contained"
              style={ButtonsStyles.contained}
              labelStyle={ButtonsStyles.labelContained}
              onPress={() => {}}
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
        
      </ScrollerWrapper>
    </View>
  );
};

export default AccountSettings;
