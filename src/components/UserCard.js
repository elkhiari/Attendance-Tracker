import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import ProfileComponent from './profile'

const UserCard = ({item}) => {
  return (
    <Card >
        <ProfileView>
            <ProfileComponent name={item.firstName} />
                <DetailsContainer>
                    <Name>
                        {item.firstName} {item.lastName}
                    </Name>
                    <DateEnd>
                        {item.email}
                    </DateEnd>
                </DetailsContainer>
        </ProfileView>
    </Card>
  )
}


const Card = styled.TouchableOpacity`
    flex-direction: row;
    min-width: 100%;
    border-radius: 10px;
    margin-bottom: 5px;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    position: relative;
    overflow: hidden;
`;

const ProfileView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Name = styled.Text`
    font-size: 15px;
    color: #000;
    margin-left: 20px;
    font-family: "NunitoBlack"
    `;
    
    const DateEnd = styled.Text`
    font-size: 12px;
    color: #000;
    margin-left: 20px;
    font-family: "NunitoSemiBold"
`;

const DetailsContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export default UserCard