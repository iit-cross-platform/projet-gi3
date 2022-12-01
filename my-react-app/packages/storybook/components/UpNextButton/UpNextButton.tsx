import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type UpNextButtonProps = {
    backgroundColor: string
    textColor: string
    borderRadius: string
    text: string
    type: 'link' | 'button'
}

const UpNextButton: React.FC<UpNextButtonProps> = (props) => {
    const { backgroundColor, textColor, borderRadius, text, type } = props

    const styleComponent = {
       container : type =='link' ? {} : { backgroundColor : backgroundColor},
       text: type =='link' ? {  borderBottomColor : backgroundColor , borderBottomWidth : 2 } :{}

    }
    return (
        <View>
            <TouchableOpacity style={styleComponent.container}>
                <Text style={[styleComponent.text , { color : textColor } ]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UpNextButton

const styles = StyleSheet.create({})