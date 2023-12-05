import React from 'react'
import styled from 'styled-components'


const Left = () => {
  return (
    <Logo source={{
        uri: "https://jobintech.academy/wp-content/uploads/2023/05/cropped-Minimalist-Neutral-Multi-Device-Computer-Mockup-Website-Launch-Instagram-Post-768x230.png"
    }} />
  )
}

const Logo = styled.Image`
    resize-mode: contain;
    width: 200px;
    height: 50px;
    margin-left: 10px;
`

export default Left

