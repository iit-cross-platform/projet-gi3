import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


type SlideMusicProps = {
    duration : number
}
const SliderMusic : React.FC<SlideMusicProps> = (props) => {
  const { duration } = props;

    return (
    <View>
      <Text>SliderMusic</Text>
      <Text>{duration}</Text>
    </View>
  )
}

export default SliderMusic

const styles = StyleSheet.create({})