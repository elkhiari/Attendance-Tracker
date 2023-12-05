import React from 'react'
import styled from 'styled-components/native'
import ProfileComponent from './profile';

export default GroupCard = ({navigation,item}) => {

   

    const date = new Date();
    const dateEnd = new Date(item.EndDate);
    const diffTime = Math.abs(dateEnd - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    

  return (
    <>
    <Card  onPress={()=>{navigation.navigate("Attendance",{id:item})}} >
       <ProfileView>
            <ProfileComponent name={item.name} />
            <DetailsContainer>
                <Name>
                    {item.name}
                </Name>
                <DateEnd>
                    {diffDays} days left
                </DateEnd>
            </DetailsContainer>
       </ProfileView>
       <StudentsCount>
               <StudentsCountText>
                    {item.todayAttendance[0]?.presentStudents?.length || 0} | {item.studentsCount}
               </StudentsCountText>
        </StudentsCount>

        <LiveBadge 
            style={{
                backgroundColor: item?.todayAttendance.length > 0 ? "#48BCD1" : "#C4C4C4"
            }}
        >

        </LiveBadge>
    </Card> 
    </>
  )
}



const Card = styled.TouchableOpacity`
    min-width: 100%;
    border-radius: 10px;
    margin-bottom: 5px;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: row;
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
    font-family: 'NunitoSemiBold';
`;

const DateEnd = styled.Text`
    font-size: 12px;
    color: #000;
    margin-left: 20px;
    font-family: 'NunitoBold';
`;

const DetailsContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const StudentsCount = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const StudentsCountText = styled.Text`
    font-size: 15px;
    color: #000;
    font-family: 'NunitoExtraBold';
`;

const LiveBadge = styled.View`
    position: absolute;
    top: -5px;
    right: -5px;
    border-radius: 5px;
    padding: 10px;
`;