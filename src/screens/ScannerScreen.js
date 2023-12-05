import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useSession } from '../contexts/authContext';
import UserCard from '../components/UserCard';
import Loading from '../components/loading';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scannedData, setScannedData] = useState(0);
  const [msg, setMsg] = useState(null);
  const [cnie, setCnie] = useState(null);
  const [user,setUser] = useState();
  const {token} = useSession();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async({ type, data }) => {
    if (cnie === data)
      return;
    setCnie(data);
    setScannedData(scannedData + 1);
    await makeRequest(data);
  };

  const makeRequest = async (cnie) => {
    setLoading(true);
    try {
      const response = await axios.post(process.env.EXPO_PUBLIC_API_URL + "attendancerecords/" +cnie,{}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMsg(response.data.message);
      setUser(response.data.student)
      
    } catch (error) {
      console.error("Error fetching data:", error);
      if (error.response) {
        setMsg(error.response.data.message);
      }
      setUser()
    } finally {
      setLoading(false);
    }
  }

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={{
          flex:1,
          width: "100%",
          height: 500,
          alignSelf: 'center',
          position: 'absolute',
          top: 0,
          borderRadius:15,
        }}
      />
      {msg && <View style={styles.scanDataContainer}>
          <Text style={styles.scanDataText}>
            {msg}
          </Text>
        </View>}
        {user && 
          <UserCard item={user} /> 
        } 

        

    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding:10,
    backgroundColor: '#ECF3F6',
  },
  scanDataContainer: {
    backgroundColor: "#48BCD1",
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius:10,
    marginBottom:20,
  },
  scanDataText: {
    color:"#fff",
    fontSize: 16,
    fontFamily:"NunitoBlack",

  },
});
