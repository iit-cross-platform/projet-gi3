import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { CardFood } from "@my-workspace/my-ui";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <CardFood
                description={<Text style={{ color: 'black' }}>test</Text>}
                price={<View style={{ flex: 1, flexDirection: 'row', height: 50 }}><Text style={{ color: 'black' }}>{' '}test{' '}</Text><Button title="+" /></View>}
                title={<Text style={{ color: 'black' }}>test</Text>}
            />

            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})