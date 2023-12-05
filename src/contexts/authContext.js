import React, { createContext, useState,useEffect, useContext } from "react";
import * as SecureStore from 'expo-secure-store';
import { deleteToken, saveToken } from "./useStore";
import axios from "axios";
import NetInfo from "@react-native-community/netinfo";



const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token,setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);


  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  

  const [user, setUser] = useState();

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        const storedToken = await SecureStore.getItemAsync('token');
        if (storedToken) {
          setToken(storedToken);
        }
        if (!storedToken) {
          setLoading(false);
        }
      } catch (error) {
        console.error('Error retrieving token:', error);
        setLoading(false);
      } 
    };

    if (isConnected) {
      retrieveToken();
    }
    else {
      setTimeout(()=>{
        setLoading(false)
      },1000)
    }
    
  },[token,isConnected])

  const save = async (token,user) => {
    await saveToken(token);
    setToken(token)
    setUser(user)
  }

  const logout = async () => {
    try {
        setUser(null);
        await deleteToken();
        setToken('')
    }
    catch (e) {
        console.log(e);
    }
}


const checkUser = async () => {

    try {
        const user = await axios.get(process.env.EXPO_PUBLIC_API_URL + "users/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        setUser(user.data);
        setLoading(false);
    }
    catch (e) {
        // logout();
        setLoading(false);
    } 
}

useEffect(() => {
    if (token) {
        checkUser();
    }

}, [token]);

  return (
    <AuthContext.Provider value={{ token, user, setUser,logout,save,loading,isConnected }}>
      {children}
    </AuthContext.Provider>
  );
};

const useSession = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useSession };
