import React from 'react'

import {createNativeStackNavigator} from "@react-navigation/native-stack"
import AuthStack from '../authStack/AuthStack';
import BottomNavigation from './BottomNavigation';

const appStack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <appStack.Navigator screenOptions={{ headerShown:false }}>
        <appStack.Screen name='auth' component={AuthStack}/>
        <appStack.Screen name='app' component={BottomNavigation}/>
    </appStack.Navigator>
  )
}

export default AppStack