import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ArtisteScreen = () => {

    const listArtiste = [{
        name : "Jenny Wilson",
        followers : "694, 856 Followers",
        image : "-----.png"
    }]
  return (
    <View>

   {listArtiste.map(p=>{return(
                <TouchableOpacity>
                    <Text> {p.name} </Text>
                </TouchableOpacity>
            )})}
    </View>
  )
}

export default ArtisteScreen

const styles = StyleSheet.create({})