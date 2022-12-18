import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CardFood } from "@my-workspace/my-ui";

const HomeFood = () => {

    const [listFood] = useState([{
        source: "https://reactnative.dev/img/tiny_logo.png",
        title: "title 1",
        description: "description 1"
    }, {
        source: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg',
        title: "title 2",
        description: "description 2"
    }, {
        source: "https://reactnative.dev/img/tiny_logo.png",
        title: "title 3",
        description: "description 3"
    }, {
        source: "https://reactnative.dev/img/tiny_logo.png",
        title: "title 4",
        description: "description 4"
    }, {
        source: "https://reactnative.dev/img/tiny_logo.png",
        title: "title 5",
        description: "description 5"
    }])
    return (
        <View>
            <Text>HomeFood</Text>
            {


                listFood.map((food, index) => {
                    return (
                        index % 2 === 0 ?
                            <View style={{ flexDirection: 'row' }}>
                                <Text>{index}</Text>

                                <CardFood
                                    source={listFood[index].source}

                                    price={<Text style={{ color: 'gray' }}>{' '}{listFood[index].description}{' '}</Text>}
                                    title={<Text style={{ color: 'red' }}>{' '}{listFood[index].title}{' '}</Text>}
                                />
                                {
                                    listFood[index + 1] ?
                                        <CardFood
                                            source={listFood[index + 1].source}

                                            price={<Text style={{ color: 'gray' }}>{' '}{listFood[index + 1]?.description}{' '}</Text>}
                                            title={<Text style={{ color: 'red' }}>{' '}{listFood[index + 1]?.title}{' '}</Text>}
                                        /> : null
                                }

                            </View> : null

                    )
                })
            }
        </View>
    )
}

export default HomeFood

const styles = StyleSheet.create({})