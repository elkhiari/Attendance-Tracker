import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSession } from '../contexts/authContext'

import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native';
import styled from 'styled-components';
import ProfileComponent from '../components/profile';

const SettingsScreen = () => {
  const {logout,user} = useSession();
  return (
    <Container>

    <Title>
      Settings
    </Title>


      <Main>
    <UserCard >
      <ProfileComponent name="Othmane" />
      <Details>
        <Name>Othmane elkhiari</Name>
        <Email>Othmaneelkhiari@gmail.com</Email>
      </Details>
    </UserCard>
        <MainSetting  onPress={logout}>
          <AcText>
            Logout
          </AcText>
          <MaterialIcons name="logout" size={24} color="#fff" />
      </MainSetting>
      </Main>

      <View>
    </View>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #ECF3F6;
`;

const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
  font-family: 'NunitoBlack';
`;


const Details = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
`;

const Name = styled.Text`
  font-size: 15px;
  color: #000;
  font-family: "NunitoBlack"
  `;

const Email = styled.Text`
  font-size: 12px;
  color: #000;
  font-family: "NunitoSemiBold"
`;

const UserCard = styled.View`
  flex-direction: row;
  min-width: 100%;
  border-radius: 10px;
  margin-bottom: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  place-items: center;
  padding: 15px 20px;
  position: relative;
  overflow: hidden;
`;

const MainSetting = styled.TouchableOpacity`
  min-width: 100%;
  border-radius: 10px;
  margin-bottom: 5px;
  padding: 15px 20px;
  place-items: center;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #F44336;
  
`;

const Main = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const AcText = styled.Text`
  font-size: 15px;
  font-family: "NunitoBlack";
  color: #ffffff;
  `;





export default SettingsScreen
