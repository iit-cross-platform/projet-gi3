import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { UpNextButton, RoundButtonMusic } from '@my-workspace/my-ui'
import { AntDesign,Feather } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const [currentDuration, setCurrentDuration] = useState(0)
    const [maxDuration, setMaxDuration] = useState(77)
    const [isPlaying, setIsPlaying] = useState(false)


    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'red', flexDirection: 'row', justifyContent: 'center' }}>

                <RoundButtonMusic
                    backgroundColor="transparent"
                    size={70}
                    icon={<AntDesign name="left" size={24} color="white" />}
                    onClickButton={() => { navigation.goBack() }}
                />
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingLeft: 10 }}>Now Playing</Text>
            </View>
            <View style={{ flex: 4, backgroundColor: 'yellow' }}>

                <Text> add comp cover</Text>

            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}>
                <Text style={{ color: 'white' }}>{currentDuration}</Text>
                <Slider
                    onValueChange={(value) => { setCurrentDuration(value) }}
                    style={{ width: 200, height: 40 }}
                    minimumValue={0}
                    step={1}
                    maximumValue={maxDuration}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#FDFDFD"
                    thumbTintColor="#F00DFD"
                />
            </View>
            <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', justifyContent: 'center', backgroundColor: '#fdfdfd' }}>
                <RoundButtonMusic
                    backgroundColor="blue"
                    icon={<Feather name="chevrons-left" size={24} color="white" />}
                    onClickButton={() => { }}
                    size={50}
                />

                <RoundButtonMusic
                    backgroundColor="blue"
                    icon={<Feather name="chevron-left" size={24} color="white" />}
                    onClickButton={() => { }}
                    size={50}
                /> <RoundButtonMusic
                    backgroundColor="blue"
                    icon={isPlaying ? <FontAwesome name="pause" size={24} color="white" /> : <FontAwesome name="play" size={24} color="white" />}
                    onClickButton={() => {setIsPlaying(!isPlaying) }}
                    size={50}
                /> <RoundButtonMusic
                    backgroundColor="blue"
                    icon={<Feather name="chevron-right" size={24} color="white" />}
                    onClickButton={() => { }}
                    size={50}
                /> <RoundButtonMusic
                    backgroundColor="blue"
                    icon={<Feather name="chevrons-right" size={24} color="white" />}
                    onClickButton={() => { }}
                    size={50}
                />

            </View>
            <View style={{ flex: 2, backgroundColor: '#616161' }}></View>
            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>

                <UpNextButton
                    backgroundColor="red"
                    borderRadius="10"
                    text="Hello"
                    textColor="#FFFF00"
                    type="button"
                />
                <UpNextButton
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