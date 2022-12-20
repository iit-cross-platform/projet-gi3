import { Button, StyleSheet, View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeComponent from "./screen/WelcomeComponent";
import HomeScreen from "./screen/HomeScreen";

import { RoundButtonMusic } from "@my-workspace/my-ui";
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons'; 


const App = () => {

  const [isPlaying , setIsPlaying ] = useState(false)
  const [duration , setDuration ] = useState(0)
  const [count , setCount] = useState(0)

  const ref = useRef("REF");

  const handleClickButton = ()=>{
    setIsPlaying(!isPlaying)
    
  }
  let interval ;

  useEffect (()=> {
   console.log(" on monted")

  },[])

  useEffect(()=>{
    console.log("useEffect ")
    setCount(count => count+1)
    console.log("arrayState",count)
    if(isPlaying){
      console.log(isPlaying)
      interval = setInterval(()=>{
        console.log("setInterval")
        setDuration(oldValue => oldValue+1)
      },1000)
      
    }
    console.log("clearInterval")
    return () => clearInterval(interval)
  },[isPlaying ])

  const handleRef = () => {
    console.log("test", ref.current)
  }

  useEffect (()=> {
    console.log(" array null -- ")
 
   })

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {/* methode 1 */}
<Text>Duration : {duration}</Text>
<Text>REF : {ref.current}</Text>
<Text>isPlaying : {isPlaying ? 'true' : 'false'}</Text>
<Button onPress={()=>{ref.current = 'test'; handleRef() }} title="ref"/>

{/* methode 2 */}
{
<RoundButtonMusic
 backgroundColor="blue"
 icon={isPlaying ? <AntDesign name="pause" size={24} color="white" /> : <AntDesign name="play" size={24} color="red" />}
 onClickButton={() => {handleClickButton()}}
/>

}

</ApplicationProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
