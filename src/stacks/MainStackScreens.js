import React from 'react'
import styled from 'styled-components/native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';


import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'
import Left from '../components/header/Left'
import ScannerScreen from "../screens/ScannerScreen.js";



const MainStackScreens = ({navigation}) => {
    const MainStack = createBottomTabNavigator()

    const tabBarOptions = {
        showLabel:false,
    };

    const screenOptions = (({ route }) => (
      {
        tabBarIcon : ({focused})  => {
            return (route.name == "Home" ?<FontAwesome name="group" size={30} color={focused?"#48BCD1":"#C4C4C4"} />
              :route.name == "Settings" ?
              <Ionicons name="ios-settings-sharp" size={30} color={focused?"#48BCD1":"#C4C4C4"} />
              :<MainIcon>
                <MaterialCommunityIcons name="qrcode-scan" size={30} color={focused?"#48BCD1":"#C4C4C4"} />
              </MainIcon>
              )
        },
        tabBarStyle: [{
          backgroundColor:"#fff",
          height:60,
          elevation:1,
          borderTopWidth : 0,
          borderTopLeftRadius:30,
          borderTopRightRadius:30,
                    
        }],

        
        tabBarShowLabel:false, 
        tabBarHideOnKeyboard:true,
        headerStyle: {
          backgroundColor: '#ECF3F6' ,
          elevation: 0,
          borderTopWidth: 0,
        },

        

        headerTitle: ()=> <Left navigation={navigation}></Left>,
        headerTitleAlign: 'center',
       
  
  


        
    }))
  return (
    <MainStack.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions}  >
        <MainStack.Screen name='Home' component={HomeScreen} />
        <MainStack.Screen name="scanner" component={ScannerScreen} />
        <MainStack.Screen name='Settings' component={SettingsScreen} />
    </MainStack.Navigator>
  )
}

const MainIcon = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  box-shadow: 0 0 5px rgb(0, 0, 0);
  elevation: 2;
`;

export default MainStackScreens
