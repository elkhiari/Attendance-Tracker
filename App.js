import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppStackScreens from './src/stacks/AppStackScreens'
import { AuthProvider } from './src/contexts/authContext'
import { useFonts } from 'expo-font';


export default App = () => {


  const [loaded] = useFonts({
    NunitoBlack: require('./assets/fonts/Nunito/Nunito-Black.ttf'),
    NunitoBold: require('./assets/fonts/Nunito/Nunito-Bold.ttf'),
    NunitoExtraBold: require('./assets/fonts/Nunito/Nunito-ExtraBold.ttf'),
    NunitoExtraLight: require('./assets/fonts/Nunito/Nunito-ExtraLight.ttf'),
    NunitoLight: require('./assets/fonts/Nunito/Nunito-Light.ttf'),
    NunitoRegular: require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
    NunitoSemiBold: require('./assets/fonts/Nunito/Nunito-SemiBold.ttf'),

  });


  if (!loaded) {
    return null;
  }
  return (
    <AuthProvider>
      <NavigationContainer>
        {<AppStackScreens  />}
      </NavigationContainer>
    </AuthProvider>
  )
}
