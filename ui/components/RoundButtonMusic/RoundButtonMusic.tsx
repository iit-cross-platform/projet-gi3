import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons'; 

type RoundButtonMusicProps = {
  backgroundColor : string
  icon : React.ReactNode
}

const RoundButtonMusic : React.FC<RoundButtonMusicProps> = (props) => {
   const { backgroundColor , icon} = props
 
    return (
    <View>
      <Text>{backgroundColor}</Text>

      {icon}
    </View>
  )
}

export default RoundButtonMusic

const styles = StyleSheet.create({})