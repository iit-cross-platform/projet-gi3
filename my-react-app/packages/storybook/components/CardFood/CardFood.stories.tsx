import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import CardFood from './CardFood';
import { Button, Text, View } from 'react-native';
const CardFoodMeta: ComponentMeta<typeof CardFood> = {
  title: 'CardFood Component',
  component: CardFood,
  argTypes: {},
  args: {
    title: <Text style={{ color: 'red' }}> test </Text>,
    price: <Text style={{ color: 'gray' }}> test </Text>,
  },
};
export default CardFoodMeta;

type CardFoodStory = ComponentStory<typeof CardFood>;
export const Basic: CardFoodStory = (args) => <CardFood {...args} />;
export const CardType2: CardFoodStory = (args) => <CardFood {...args} />;

CardType2.args = {
  ...Basic.args,
  title: <Text style={{ color: 'black' }}> test </Text>,
  description: <Text style={{ color: 'black' }}> test </Text>,
  price: (
    <View>
      <Text style={{ color: 'black' }}> test </Text>
      <Button title="test" />
    </View>
  ),
};
