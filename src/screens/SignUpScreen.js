import { View, Text, Button, Image } from 'react-native'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useSession } from '../contexts/authContext'
import axios from 'axios'

export default SignUpScreen = () => {

    const {save} = useSession()
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState("")

    const [data, setData] = useState({
        password:"",
        email:"",
    })

    const login = async () => {
        setLoading(true);
        try {
            const res = await axios.post(process.env.EXPO_PUBLIC_API_URL + "users/login", {email:data.email,password:data.password});
            console.log(res.data);
            save(res.data.token,res.data.user);
        } catch (error) {
            if (error.response.data.message) {
                setError(error.response.data.message);
            }
            console.log(error.response.data.message);
        } finally {
            setLoading(false);
        }
    };
    
  return (
    <Container>

       <Main>
            <Logo resizeMode="contain" source={{uri:"https://jobintech.academy/wp-content/uploads/2023/05/cropped-Minimalist-Neutral-Multi-Device-Computer-Mockup-Website-Launch-Instagram-Post-768x230.png"}}>
            </Logo>
        <AuthContainer>
            <Fieald>
                <TextInput 
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCompleteType="email"
                    autoCorrect={false}
                    autoFocus={true}
                    keyboardType="email-address" 
                    onChangeText={e=>setData({...data,email:e})}
                    >
                </TextInput>
            </Fieald>
            <Fieald>
                <TextInput 
                    placeholder="Password"
                    secureTextEntry={true}
                    utoCapitalize="none"
                    autoCompleteType="password"
                    autoCorrect={false}
                    onChangeText={p=>setData({...data,password:p})}
                    >
                </TextInput>
            </Fieald>   
                {error && <TextView>
                    {error}
                </TextView>}
            <Fieald>
                <LoginBtn onPress={login}>
                    {
                        loading ? 
                        <Loading></Loading>
                        :
                        <TextLogin>
                        Login
                    </TextLogin>}
                </LoginBtn>
            </Fieald>
        </AuthContainer>
       </Main>
       
    </Container>
  )
}

const Container = styled.View`
    flex:1;
    padding-top: 10%;
    padding-bottom: 10%;
    align-items: center;
    justify-content: center;
    background-color: #ECF3F6;
`
const Main = styled.View`
    padding: 30px;
    width: 100%;
    min-height: 10%;
    border-radius: 30px 30px 0 0;
`

const Logo = styled.Image`
    aspect-ratio: 2 / 1 ;
    width:100%;

`



const AuthContainer = styled.View`
    
`

const Fieald = styled.View`
    margin-bottom: 10px;
`

const TextLogin = styled(Text)`
    font-size: 16px;
    color: white;
    text-align: center;
    font-family: "NunitoBlack";

`


const TextInput = styled.TextInput`
    background-color: rgba(255, 255, 255, 0.5);
    margin-bottom: 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 14px 20px;
    width: 100%;
    /* height: 50px; */
    border-radius: 5px;
    font-family: "NunitoBold";
`

const LoginBtn = styled.TouchableOpacity`
    width: 100%;
    background-color: #48BCD1;
    padding: 15px 20px ;
    border-radius: 5px;
`


const Loading = styled.ActivityIndicator.attrs((props) => ({
    color: "#ffffff",
    size: "small",
}))``

const TextView = styled.Text`
    width: 100%;
    background-color: #BDF0F5;
    border-width: 1px;
    border-color: #48BCD1;
    color: #000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px ;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 13px;
    text-align: justify;
    font-family: "NunitoSemiBold";

`;

