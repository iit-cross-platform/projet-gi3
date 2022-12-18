import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { RoundButtonMusic } from "@my-workspace/my-ui";

const HomeMusic = ({ navigation }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    return (
        <View>
            <Button title="GO BACK" onPress={() => {
                navigation.goBack()
            }} />
            <Text>HomeMusic</Text>


            <View style={{ flexDirection: "row" }}>


                <RoundButtonMusic
                    backgroundColor="transparent"
                    icon={<Ionicons name="play-back" size={24} color="black" />}
                    onClickButton={() => { }}
                />
                <RoundButtonMusic
                    backgroundColor="transparent"
                    icon={<Ionicons name="play-skip-back" size={24} color="black" />}
                    onClickButton={() => { }}
                />
                {
                    isPlaying ? <RoundButtonMusic
                        backgroundColor="blue"
                        icon={<FontAwesome name="pause" size={24} color="white" />}
                        onClickButton={() => { setIsPlaying(false) }}
                    /> :
                        <RoundButtonMusic
                            backgroundColor="blue"
                            icon={<FontAwesome name="play" size={24} color="white" />}
                            onClickButton={() => { setIsPlaying(true) }}
                        />
                }


                <RoundButtonMusic
                    backgroundColor="transparent"
                    icon={<Ionicons name="play-skip-forward" size={24} color="black" />}
                    onClickButton={() => { }}
                />
                <RoundButtonMusic
                    backgroundColor="transparent"
                    icon={<Ionicons name="ios-play-forward" size={24} color="black" />
                    }
                    onClickButton={() => { }}
                />

            </View>
        </View>
    )
}

export default HomeMusic

const styles = StyleSheet.create({})