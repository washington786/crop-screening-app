import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImageUpload from "../../screens/app/ImageUpload";
import PredictionResults from "../../screens/app/PredictionResults";
import Dashboard from "../../screens/app/Dashboard";

const homeStack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <homeStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="dashboard"
    >
      <homeStack.Screen name="dashboard" component={Dashboard} />
      <homeStack.Screen name="upload" component={ImageUpload} />
      <homeStack.Screen name="results" component={PredictionResults} />
    </homeStack.Navigator>
  );
};

export default HomeStack;
