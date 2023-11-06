import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react'
import Login from '../../screens/auth/Login';
import Register from '../../screens/auth/Register';
import ResetPassword from '../../screens/auth/ResetPassword';
import ResetPasswordOTP from '../../screens/auth/ResetPasswordOTP';
import ResetPasswordSuccess from '../../screens/auth/ResetPasswordSuccess';
import ResetPasswordAccess from '../../screens/auth/ResetPasswordAccess';

const authStack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <authStack.Navigator screenOptions={{ headerShown:false }} initialRouteName='login'>
        <authStack.Screen name='login' component={Login}/>
        <authStack.Screen name='register' component={Register}/>
        <authStack.Screen name='resetPassword' component={ResetPassword}/>
        <authStack.Screen name='otp' component={ResetPasswordOTP}/>
        <authStack.Screen name='resetSuccess' component={ResetPasswordSuccess}/>
        <authStack.Screen name='resetAccess' component={ResetPasswordAccess}/>
    </authStack.Navigator>
  )
}

export default AuthStack