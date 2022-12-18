import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Text } from 'react-native';
import BoxShoping from './BoxShoping';
const BoxShopingMeta: ComponentMeta<typeof BoxShoping> = {
  title: 'BoxShoping Component',
  component: BoxShoping,
  argTypes: {},
  args: {
    source: 'https://reactjs.org/logo-og.png',
    description: <Text>test</Text>,
    icon: <Text style={{ color: 'red' }}>icon</Text>,
  },
};
export default BoxShopingMeta;

type BoxShopingStory = ComponentStory<typeof BoxShoping>;
export const Basic: BoxShopingStory = (args) => <BoxShoping {...args} />;
