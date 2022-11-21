import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

type RoundButtonProps = {

  backgroundColor : string
  icon: string

}

const RoundButton : React.FC<RoundButtonProps> = (  props )   => {
   const { backgroundColor , icon } = props;

   const [ count , setCount ] = useState(0);
   const [ countChange , setCountChange ] = useState(0);
   const [ error , setError ] = useState('');
  
   const onPressFunction = () => {
    console.log("press")
    setCount(count => count + 1)

   }

   useEffect(()=>{
     setCountChange(oldValue => oldValue + 1)

   },[])

   useEffect(()=>{
    console.log("test")
    if(count === 3)
    {
      setError(" has not permission : use Efeect" )

    }
   },[count])
  return (
    <View>
      <TouchableOpacity style={ [styles.roundButton , { backgroundColor }] }
      onPress={onPressFunction}
      >
      <Text>{icon}</Text>
      <Text>{count}</Text>
      <Text>countChange : {countChange}</Text>
      
      <Text>{error}</Text>
      <Text>{backgroundColor}</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default RoundButton

const styles = StyleSheet.create({

roundButton : {
  width : 100,
  height: 100,
  borderRadius: 100,
  backgroundColor: 'orange',
  justifyContent : 'center',
  alignItems: 'center'
}

})