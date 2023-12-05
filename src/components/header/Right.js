import { Text } from "react-native"
import styled from "styled-components"
import { MaterialIcons } from '@expo/vector-icons'; 



export default Right = ({navigation})=> {
    return (
        <GoTOQr onPress={()=>navigation.navigate("scanner")}>
            <MaterialIcons name="qr-code-scanner" size={24} color="#48BCD1" />
        </GoTOQr>
    )
}




const GoTOQr = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    margin-right: 10px;
`