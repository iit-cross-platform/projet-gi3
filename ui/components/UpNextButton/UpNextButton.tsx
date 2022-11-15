import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type UpNextButtonProps = {
    backgroundColor : string
    textColor : string
    borderRadius : string
    text : string
    type : string
}

const UpNextButton : React.FC<UpNextButtonProps> = (props) => {
  const { backgroundColor , textColor , borderRadius , text , type} = props
    return (
    <View>
      <Text>UpNextButton</Text>
    </View>
  )
}

export default UpNextButton

const styles = StyleSheet.create({})