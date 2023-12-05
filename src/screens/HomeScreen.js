import { View, Text, RefreshControl, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from '../contexts/authContext';
import styled from 'styled-components';
import GroupCard from '../components/GroupCard';
import { AntDesign, EvilIcons, Ionicons  } from '@expo/vector-icons';
import NoDataFound from '../components/NoDataFound';
import Loading from '../components/loading';



const HomeScreen = ({navigation}) => {


  const [group, setGroup] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const { token } = useSession();



  const getGroup = async () => {
    try {
      setLoading(true);
      const response = await axios.get(process.env.EXPO_PUBLIC_API_URL + "groups/notfinished", {
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
  }, []);

  const onRefresh = () => {
    getGroup();
  };

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <Container>

    <Heading>
      <SearchContainer>
        <Circle >
          <Ionicons name="search" size={24} color="#fff" />
        </Circle>
        <SearchInput value={searchText} placeholder="Search" onChangeText={(text) => setSearchText(text)} />
        {searchText && <EvilIcons name="close" size={14} color="#638C1C" onPress={()=>setSearchText('')} />}
      </SearchContainer>
    </Heading>

    <TitleContainer>
      <PageTitle>All Groups</PageTitle>
    </TitleContainer>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      >
        {!loading && (
          group.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase())).length === 0 ? (
            <NoDataFound />
          ) : group.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase())).map((item, index) => (
            <GroupCard key={index} item={item} navigation={navigation} />
          ))
        )}
      </ScrollView>
    </Container>
  );
};

const SearchInput = styled.TextInput`
  margin-left: 10px;
  flex: 1;
  font-family: "NunitoSemiBold";
`;

const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const PageTitle = styled.Text`
  font-size: 30px;
  color: #000;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-top: 10px;
  font-family: 'NunitoBlack';
`;

const SearchContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.8);
  margin: 10px;
  box-shadow: 0 0 10px rgb(0 0 0);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 5px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
`;


const Container = styled.View`
    flex: 1;
    padding: 0 10px;
    align-items: center;
    justify-content: center;
    background-color: #ECF3F6;
`;


const Heading = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Circle = styled.View`
  padding: 8px;
  border-radius: 8px;
  background-color: #48BCD1;
`


export default HomeScreen;
