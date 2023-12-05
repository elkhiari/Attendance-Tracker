import { Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { ActivityIndicator } from 'react-native'


const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
        <AnimatedLoading></AnimatedLoading>
        <Text
          style={{
            marginTop: 10,
            fontSize: 26,
            color: "#48BCD1",
            fontFamily: "NunitoBlack",
          }}
        >
          Loading...
        </Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ECF3F6',
      },

      
})

const AnimatedLoading = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #48BCD1;
  animation: opacityAnimation 2s linear infinite;

  @keyframes opacityAnimation {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

`;