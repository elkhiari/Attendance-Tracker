import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStackScreen from "./AuthStackScreen";
import { useSession } from "../contexts/authContext";
import MainStackScreens from "./MainStackScreens";
import Attendance from "../screens/Attendance";
import ViewAttendance from "../screens/ViewAttendance";
import Loading from "../components/loading";
import { Text } from "react-native";

export default  AppStackScreens = () => {
  const {token, loading,isConnected} = useSession();
  const AppStack = createStackNavigator()


    if (loading) {
      return (
        <Loading />
      );
    }

    if (!isConnected) {
      return (
        <Text>Not Connected</Text>
      );
    }




  return (
    <AppStack.Navigator headerMode="none">
      {
        token ? 
          <AppStack.Screen name="App" component={AllStackScreens}  />
          :
          <AppStack.Screen name="Auth" component={AuthStackScreen} />
      }
    </AppStack.Navigator>
  )

}

const AllStackScreens = ({route}) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator 
      screenOptions={{
        animationEnabled:true,
        animation: 'slide_from_right',
        title:"",
        headerStyle:{
          backgroundColor:"#ECF3F6",
          shadowColor:"#F2F2F2",
          elevation:0,
          shadowOpacity:0,
          borderBottomWidth:0,
        },
        cardStyle: { backgroundColor: "#ECF3F6" },
      }}

    >
      <Stack.Screen name="Main" component={MainStackScreens} options={{headerShown:false}} />
      <Stack.Screen name="Attendance" component={Attendance} 
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen name="ViewAttendance" component={ViewAttendance} options={{animation: 'slide_from_bottom'}} />
    </Stack.Navigator>
  )
}

