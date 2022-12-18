import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CardTravel } from "@my-workspace/my-ui";

import { Ionicons } from '@expo/vector-icons'; 
import TravelList from '../components/TravelList';


const HomeTravel = () => {
    const [listTravel  ] = useState([{
        source : "https://reactnative.dev/img/tiny_logo.png",
        description : "Rp 150.000/Day",
        title : "Camp Batu Gede",
        adress : "Cisarua, Bogor", 
        star : "4.9"
      }, 
      {
        source : "https://reactnative.dev/img/tiny_logo.png",
        description : "Rp 150.000/Day",
        title : "Camp Batu Gede",
        adress : "Cisarua, Bogor", 
        star : "4.9"
      },
      {
        source : "https://reactnative.dev/img/tiny_logo.png",
        description : "Rp 150.000/Day",
        title : "Camp Batu Gede",
        adress : "Cisarua, Bogor", 
        star : "4.9"
      }] ) 

  return (
    <View>
        <Text>Title 1</Text>

        <TravelList list={listTravel}></TravelList>
        <Text>Title 2</Text>

        <TravelList list={listTravel}></TravelList>

   

    </View>
  )
}

export default HomeTravel

const styles = StyleSheet.create({})