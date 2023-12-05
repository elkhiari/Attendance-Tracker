import { useSession } from "../contexts/authContext";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, RefreshControl, ScrollView } from 'react-native';
import styled from 'styled-components';
import Card from "../components/AttendanceCard";
import Loading from "../components/loading";



export default Atd = ({navigation,route}) => {
    const [selectedDate, setSelectedDate] = useState();
    const [group, setGroup] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useSession();


  const getGroup = async () => {
    try {
      setLoading(true);
      const response = await axios.get(process.env.EXPO_PUBLIC_API_URL + "attendanceRecords/group/"+route.params.id._id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setGroup(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

    useEffect(() => { 
        getGroup();
    }
    , []);

    const onRefresh = () => {
        getGroup();
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <Container>
            <Heading >
                <Text
                  style={{
                    fontFamily:"NunitoBlack",
                    color:"#fff"
                  }}
                >
                {route.params.id.name}
                </Text>
            </Heading>
            <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}>
                {group.map((item,index)=>{
                    return <Card navigation={navigation} item={item} key={index}/>
                })}
            </ScrollView>

        </Container>
    )
}
const Container = styled.View`
    flex: 1;
    padding: 0 10px;
    align-items: center;
    justify-content: center;
`;


const Heading = styled.TouchableOpacity`
    flex-direction: row;
    min-width: 100%;
    border-radius: 10px;
    margin-bottom: 5px;
    background-color: #48BCD1;
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    position: relative;
    overflow: hidden;
`;



