import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useSession } from '../contexts/authContext';
import axios from 'axios';
import styled from 'styled-components';
import { ScrollView } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';
import ProfileComponent from '../components/profile';
import Loading from '../components/loading';
import UserCard from '../components/UserCard';

const ViewAttendance = ({navigation,route}) => {

    const [loading, setLoading] = useState(true);
    const { token } = useSession();
    const [Attendance, setAttendance] = useState();
    const [Students, setStudents] = useState();
    const [choice, setChoice] = useState(false);

    const getAttendance = async () => {
        try {
            setLoading(true);
            const response = await axios.get(process.env.EXPO_PUBLIC_API_URL + "attendancerecords/"+route.params.id, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setAttendance(response.data);
            setStudents(response.data.presentStudents);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    useState(()=>{
        getAttendance();
    },[])

    const switchStd = () => {
        setStudents(choice ? Attendance.presentStudents : Attendance.absentStudents);
        setChoice(!choice);
    }

    if (loading) {
        return (
            <Loading />
        );
    }
    
  return (
    <Container>
        <Div>
            <Choice 
            onPress={switchStd}
            style={{
                backgroundColor: !choice ? "#48BCD1" : "#F44336"
            }}>
                <Text style={{
                    fontFamily:"NunitoBlack",
                    color: "#fff"
                }}>
                    {!choice?"Present":"Absent"}
                </Text>
            </Choice>
        </Div>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
            Students && Students.map((item,index)=>{
                return (
                    <UserCard key={index} item={item} />
                )
            })
        }
        </ScrollView>
    </Container>
  )
}

export default ViewAttendance

const Choice = styled.TouchableOpacity`
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 0 10px rgb(0, 0, 0);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #48BCD1;
    width: 100%;
    
`;

const Div = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Container = styled.View`
    flex: 1;
    padding: 0 10px;
`;

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