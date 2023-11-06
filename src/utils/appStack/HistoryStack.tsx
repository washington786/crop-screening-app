import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HistoryDetails from "../../screens/app/HistoryDetails";
import History from "../../screens/app/History";

const historyStack = createNativeStackNavigator();

const HistoryStack = () => {
  return (
    <historyStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="list"
    >
      <historyStack.Screen name="list" component={History} />
      <historyStack.Screen name="details" component={HistoryDetails} />
    </historyStack.Navigator>
  );
};

export default HistoryStack;
