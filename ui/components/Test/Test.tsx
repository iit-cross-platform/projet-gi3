import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RoundButtonMusic from '../RoundButtonMusic/RoundButtonMusic'

const Test = () => {
  return (
    <View>
        <RoundButtonMusic backgroundColor='red' icon="play" />
        <RoundButtonMusic
  backgroundColor="blue"
  icon="play"
/>
<RoundButtonMusic
  backgroundColor="#1e1e72"
  icon="playuihiuhug"
/>
      <Text>Test</Text>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})