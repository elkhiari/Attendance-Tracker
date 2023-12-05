import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSession } from '../contexts/authContext'

const ProfileScreen = () => {
      const {user,token} = useSession();
      console.log(token)
  return (
    <View>
      <Text>{user?.firstName} + {user?.lastName}</Text>
      <Text>{token}</Text>
    </View>
  )
}

export default ProfileScreen
