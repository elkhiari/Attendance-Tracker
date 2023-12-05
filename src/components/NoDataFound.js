import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import styled from 'styled-components/native'


const NoDataFound = () => {
  return (
    <Container>
        <MaterialIcons name="error" size={54} color="black" />
        <TextN>
            No Data Found
        </TextN>
    </Container>
  )
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 400;
    
    

`

const TextN = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
`



export default NoDataFound

