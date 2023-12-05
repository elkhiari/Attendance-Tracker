import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 




const AttendanceCard = ({navigation,item}) => {

    const today = new Date().toISOString().split("T")[0];
    const is = item.createdAt.split("T")[0] == today

    
  return (
    <Card onPress={()=>{navigation.navigate("ViewAttendance",{id:item._id})}} 
        style={{
            backgroundColor: is ? "rgba(173, 218, 235, 0.3)" : "rgba(255, 255, 255, 0.8)",
        }}
    >
        <Row>
            <Col>
                {/* calandrier icon */}
                <MaterialCommunityIcons name="calendar-month-outline" size={24} color="#48BCD1" />
                <CText>{item.createdAt.split("T")[0]}</CText>
            </Col>
        </Row>
        <Row>
            <Col>
                <CText>{item.presentStudents.length} | {item.presentStudents.length + item.absentStudents.length}</CText>
            </Col>
        </Row>

        {is && <LiveBadge 
            style={{
                backgroundColor:  "#48BCD1"
            }}
        >
        </LiveBadge> }

    </Card>
  )
}

export default AttendanceCard



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

const CText = styled.Text`
    margin-left: 15px;
    font-family: "NunitoBlack";
`;

const Col = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Row = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
`;


const LiveBadge = styled.View`
    position: absolute;
    bottom: -5px;
    left: -5px;
    border-radius: 15px;
    padding: 16px;
`;