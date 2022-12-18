import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import {Text } from 'react-native';
import IconTouchable  from './IconTouchable';
const IconTouchableMeta: ComponentMeta<typeof IconTouchable> = {
  title: 'IconTouchable Component',
  component: IconTouchable,
  argTypes:{

  },
  args: {
    icon: <Text>test</Text>,
    onClick: () => console.log('click'),
  }
};
export default IconTouchableMeta;

type IconTouchableStory = ComponentStory<typeof IconTouchable>
export const Basic : IconTouchableStory = (args) => <IconTouchable {...args} />;