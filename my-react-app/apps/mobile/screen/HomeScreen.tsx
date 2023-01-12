import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { UpNextButton, RoundButtonMusic , Cover} from '@my-workspace/my-ui'
import { AntDesign, Feather } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation , name }) => {
    const [currentDuration, setCurrentDuration] = useState(0)
    const [maxDuration, setMaxDuration] = useState(7700)
    const [isPlaying, setIsPlaying] = useState(false)
    let interval;


    const convertSecondToHHMMSS = (seconds) => {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;

        let timeString = '';
        if (hours !== 0) {
            timeString += `${hours.toString().padStart(2, '0')}:`;
        }
        timeString += `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        return timeString;
    }



    useEffect(() => {

        if (currentDuration >= maxDuration) {
            setIsPlaying(false)
            setCurrentDuration(maxDuration)
        }
        if (currentDuration < 0) {
            setCurrentDuration(0)
        }

    }, [currentDuration])
    useEffect(() => {

        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentDuration(oldValue => oldValue + 1)

            }, 1000)
        }

        return () => clearInterval(interval)

    }, [isPlaying])

    return (
        <View style={{ flex: 1 }}>
            <Text>{name}</Text>
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


            <Cover
  borderRadius={10}
  imageUrl="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg"
/>                

                
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}>

                <View style={{ flex: 1, minWidth: 300, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'red' }}>
                    <Text style={{ color: 'white' }}>{convertSecondToHHMMSS(currentDuration)}</Text>
                    <Text style={{ color: 'white' }}>{convertSecondToHHMMSS(maxDuration - currentDuration)}</Text>


                </View>
                <Slider
                    value={currentDuration}
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
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue - 10) }}
                    size={50}
                />

                <RoundButtonMusic
                    backgroundColor="blue"
                    icon={<Feather name="chevron-left" size={24} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue - 2) }}
                    size={50}
                /> <RoundButtonMusic
                    backgroundColor="blue"
                    icon={isPlaying ? <FontAwesome name="pause" size={24} color="white" /> : <FontAwesome name="play" size={24} color="white" />}
                    onClickButton={() => { setIsPlaying(!isPlaying) }}
                    size={50}
                /> <RoundButtonMusic
                    backgroundColor="blue"
                    icon={<Feather name="chevron-right" size={24} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue + 2) }}

                    size={50}
                /> <RoundButtonMusic
                    backgroundColor="blue"
                    icon={<Feather name="chevrons-right" size={24} color="white" />}
                    onClickButton={() => { setCurrentDuration(oldValue => oldValue + 10) }}

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