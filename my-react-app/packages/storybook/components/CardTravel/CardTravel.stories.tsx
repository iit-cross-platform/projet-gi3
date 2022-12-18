import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import CardTravel  from './CardTravel'
import { Text, View } from 'react-native';
const CardTravelMeta: ComponentMeta<typeof CardTravel> = {
  title: 'CardTravel Component',
  component: CardTravel,
  argTypes:{

  },
  args: {

    source: "https://reactnative.dev/img/tiny_logo.png",
    description: <Text>description</Text>,
    title: <Text>title</Text>,


  }
}
export default CardTravelMeta;

type CardTravelStory = ComponentStory<typeof CardTravel>
export const Basic : CardTravelStory = (args) => <CardTravel {...args} />
export const story2 : CardTravelStory = (args) => <CardTravel {...args} />

story2.args = {
    source: "https://reactnative.dev/img/tiny_logo.png",
    description: <Text>description</Text>,
    title: <View style = {{flexDirection : "row" , justifyContent : 'space-around'}}><Text>title</Text> <Text>star</Text> </View>,

}