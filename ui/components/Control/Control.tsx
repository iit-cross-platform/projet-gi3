import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ControlProps ={

    buttonPlay : React.ReactNode
    buttonNext : React.ReactNode
    buttonPrev : React.ReactNode

}
const Control : React.FC<ControlProps> = (props) => {
  const { buttonPlay , buttonNext , buttonPrev} = props;
  
    return (
    <View style={{ flex:1 , flexDirection : "row"}}>
      
      <View style={{flex : 1 , backgroundColor : "#070707"}}>
      {buttonPrev}

      </View>
      <View style={{flex : 2 , backgroundColor : "#AAAAAA"}}>
      {buttonPlay}
      </View>
    
      <View style={{flex : 1 , backgroundColor : "orange"}}>
      {buttonNext}

      </View>
    </View>
  )
}

export default Control

const styles = StyleSheet.create({})