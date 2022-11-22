import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


type SlideMusicProps = {
    duration : number
    durationMax : number
}
const SliderMusic : React.FC<SlideMusicProps> = (props) => {
  const { duration , durationMax} = props;
  const [ currentDuration , setCurrentDuration ] = useState(0)

  const onPressButton = () => {
    setCurrentDuration(oldValue => oldValue + 1)

    // cette condition est incorrecte , puisque la fonction setCurrentDuration est asynchrone 
    // donc on doit utiliser useEffect
    if (currentDuration === 10){
        console.log("end stream",currentDuration )
    }
  }

  useEffect(() => {
    console.log(" useEffect currentDuration", currentDuration)
    if (currentDuration === 10){
        console.log("end stream currentDuration")
    }
  },[currentDuration])


  const onEndStream = () => {

  }
    return (
    <View>
      <Text>SliderMusic</Text>
      <Text>duration : {duration}</Text>
      <Text>currentDuration : {currentDuration}</Text>
      <Text>durationMax : {durationMax}</Text>
      <Button title='increment currentDuration' onPress={onPressButton}/>
    </View>
  )
}

export default SliderMusic

const styles = StyleSheet.create({})