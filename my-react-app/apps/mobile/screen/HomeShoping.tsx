import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { BoxShoping, IconTouchable } from '@my-workspace/my-ui'
import { MaterialIcons } from '@expo/vector-icons';

const HomeShoping = ({ navigation }) => {
    return (

        <View>

            <BoxShoping
                description={<Text>test</Text>}
                icon={<View style={{ justifyContent: 'flex-end', flex: 1, flexDirection: 'row' }}>
                    <IconTouchable onClick={() => {
                        console.log("test"
                        )
                    }}
                        icon={<MaterialIcons name="favorite-border" size={24} color="red" />
                        }
                    >
                    </IconTouchable>
                </View>}
                source="https://reactjs.org/logo-og.png"
            />
            <Button title="GO BACK" onPress={() => {
                navigation.goBack()
            }} />
            <Text>HomeShoping</Text>
        </View>
    )
}

export default HomeShoping

const styles = StyleSheet.create({})