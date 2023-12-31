import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignUpScreen from '../screens/SignUpScreen'


export default AuthStackScreen = () => {
  const AuthStack = createStackNavigator()

  return (
    <AuthStack.Navigator headerMode="none">
       <AuthStack.Screen name="SignIn" component={SignUpScreen} />
    </AuthStack.Navigator>
  )

}