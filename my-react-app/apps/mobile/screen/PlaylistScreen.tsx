import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const PlaylistScreen = ({ navigation }) => {
    const [playlist] = useState([{
        name: "video 1",


    }, {
        name: "video 2",


    }])
    return (
        <View>

            {playlist.map(p=>{return(
                <TouchableOpacity onPress={()=>navigation.navigate("Home", {name : p.name})}>
                    <Text> {p.name} </Text>
                </TouchableOpacity>
            )})}
            <Text>PlaylistScreen</Text>
        </View>
    )
}

export default PlaylistScreen

const styles = StyleSheet.create({})