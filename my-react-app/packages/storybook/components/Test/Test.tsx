import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import RoundButtonMusic from '../RoundButtonMusic/RoundButtonMusic'
import { AntDesign } from '@expo/vector-icons'

const Test = () => {
    const [isPlay, setIsPlay] = useState(true)
    const [text, setText] = useState()
    const [count, setCount] = useState(0)

    const onChangeStateButton = () => {
        setIsPlay(!isPlay)

    }

    useEffect(() => {
        if (isPlay) {
            setText("is Play. from use Effect")
        } else {
            setText("is pause. from use Effect")
        }

    }, [isPlay])


    return (

        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text>{text}</Text>
            <RoundButtonMusic
                onClickButton={() => console.log("caretleft")}
                backgroundColor="blue"
                icon=<AntDesign name="caretleft" size={24} color="white" /> />
            {
                isPlay ?
                    <RoundButtonMusic
                        onClickButton={onChangeStateButton}
                        backgroundColor="blue"
                        icon=<AntDesign name="play" size={24} color="white" /> /> :

                    <RoundButtonMusic
                        onClickButton={onChangeStateButton}
                        backgroundColor='red' icon=<AntDesign name="pause" size={24} color="white" /> />



            }

            <RoundButtonMusic
                onClickButton={() => console.log("caretright")}
                backgroundColor="blue"
                icon=<AntDesign name="caretright" size={24} color="white" /> />



            <Text>Test</Text>
        </View>
    )
}

export default Test

const styles = StyleSheet.create({})