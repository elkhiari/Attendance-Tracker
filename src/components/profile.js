import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components'

const ProfileComponent = ({name}) => {
  return (
    <Profile>
    <ProfileText>
        {name[0]}
    </ProfileText>
</Profile>
  )
}

export default ProfileComponent


const Profile = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #48BCD1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProfileText = styled.Text`
    font-size: 24px;
    color: #fff;
    font-family: "NunitoBlack";
`;
