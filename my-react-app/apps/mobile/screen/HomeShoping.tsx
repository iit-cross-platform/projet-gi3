import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'

const HomeShoping = ({navigation}) => {
  return (
    
    <View>
          <Button title="GO BACK" onPress={() => {
                navigation.goBack()
            }} />
      <Text>HomeShoping</Text>
    </View>
  )
}

export default HomeShoping

const styles = StyleSheet.create({})