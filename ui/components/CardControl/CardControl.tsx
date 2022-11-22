import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


type CardControlProps = {
    durationMusic : number
}
const CardControl : React.FC<CardControlProps> = (props) => {
   const { durationMusic } = props;
  
    return (
    <View>
      <Text>CardControl</Text>
      <Text>{ durationMusic }</Text>
    </View>
  )
}

export default CardControl

const styles = StyleSheet.create({})