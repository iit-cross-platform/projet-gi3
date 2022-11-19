import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'


type BoxCTAProps = {
title: React.ReactNode
description : React.ReactNode
action : React.ReactNode 
image : string

}

const BoxCTA : React.FC<BoxCTAProps> = (props) => {

  const { title, description , action , image} = props;
  
  const [ textButton , setTextButton ] = useState("")
  const [ count , setCount ] = useState(0)
  const [ error , setError ] = useState ("")

  // function onPress
  const onPress = () => {
    console.log("on press")
    setTextButton('done')
    console.log('before set count',count)
    setCount(oldValue => oldValue + 1)
    console.log('after set count',count)
    debugger;
    if(count === 3){
      setError(" NOT PERMISSION ")
    }
  } 

  useEffect(()=>{
  console.log(count)
  if(count === 3){
    setError(" NOT PERMISSION  : USE EFFECT")
  }

  },[count])
  

  return (
    <View>
      <View>{title}</View>
      <View>{description}</View>
      <View>{action}</View>
      <Text>{image} </Text>

      <Text> {textButton} </Text>
      <Text> count : {count} </Text>
      <Text> ERROR : {error} </Text>

      <Button title="submit" onPress={onPress}/>


      
    </View>
  )
}

export default BoxCTA

const styles = StyleSheet.create({})