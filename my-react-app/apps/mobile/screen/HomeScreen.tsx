import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { UpNextButton, RoundButtonMusic } from '@my-workspace/my-ui'
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems : 'center' ,  backgroundColor: 'red', flexDirection: 'row' , justifyContent: 'center' }}>

                <RoundButtonMusic
                    backgroundColor="transparent"
                    size={70}
                    icon={<AntDesign name="left" size={24} color="white" />}
                    onClickButton={() => { navigation.goBack()}}
                />
                <Text style={{ color : 'white' , fontSize: 16 , fontWeight: 'bold', paddingLeft : 10}}>Now Playing</Text>
            </View>
            <View style={{ flex: 4, backgroundColor: 'yellow' }}></View>
            <View style={{ flex: 1, backgroundColor: 'blue' }}></View>
            <View style={{ flex: 1, backgroundColor: '#fdfdfd' }}></View>
            <View style={{ flex: 2, backgroundColor: '#616161' }}></View>
            <View style={{ flex: 1, backgroundColor: '#090909' }}><UpNextButton
                backgroundColor="red"
                borderRadius="10"
                text="Hello"
                textColor="#562c2c"
                type="link"
            /></View>

            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})