import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Text } from 'react-native';
import ImagePositionAbsolute from './ImagePositionAbsolute';
const ImagePositionAbsoluteMeta: ComponentMeta<typeof ImagePositionAbsolute> = {
  title: 'ImagePositionAbsolute Component',
  component: ImagePositionAbsolute,
  argTypes: {},
  args: {
    source: 'https://reactnative.dev/img/tiny_logo.png',
    icon: <Text style={{ position: 'absolute', top: 0, right: 0, color: 'red' }}>test</Text>,
  },
};
export default ImagePositionAbsoluteMeta;

type ImagePositionAbsoluteStory = ComponentStory<typeof ImagePositionAbsolute>;
export const Basic: ImagePositionAbsoluteStory = (args) => <ImagePositionAbsolute {...args} />;
