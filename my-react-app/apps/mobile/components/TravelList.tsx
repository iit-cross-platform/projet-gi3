import { StyleSheet, Text, View , ScrollView} from 'react-native'
import React from 'react'
import { CardTravel } from "@my-workspace/my-ui";
import { Ionicons } from '@expo/vector-icons'; 


type Travel =  {
    source : string,
    description : string,
    title : string,
    adress : string, 
    star : string
}

type TravelListProps = {
    list : Travel[]
}
const TravelList : React.FC<TravelListProps>= (props) => {
    const {list} = props ;
  return ( 
    <ScrollView horizontal={true} style={{width: 300}}>
    {
list.map(travel => { return (  <CardTravel
description={<View style={{flexDirection : 'row' , alignItems: 'center'}}><Ionicons name="location" size={20} color="#ff0000" /><Text>test {travel.description}</Text></View>}
source={travel.source}
title={<View style={{flexDirection: 'row', justifyContent: 'space-around'}}><Text>{travel.title}</Text><Text>{travel.star}</Text></View>}
/>)


})}    </ScrollView>
  )
}

export default TravelList

const styles = StyleSheet.create({})