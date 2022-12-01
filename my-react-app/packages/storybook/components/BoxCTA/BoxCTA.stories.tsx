import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import BoxCTA  from './BoxCTA'
import { Button, Text } from 'react-native';
import UpNextButton from '../UpNextButton/UpNextButton';


const BoxCTAMeta: ComponentMeta<typeof BoxCTA> = {
    title: 'BoxCTA Component',
    component: BoxCTA,
    argTypes:{

    },
    args: {
        title : <Text>hello </Text>,
        description : <Text>iit g2</Text>,
        action : <UpNextButton
        backgroundColor="red"
        borderRadius="10"
        text="Hello"
        textColor="#FFFF00"
        type="button"
      />,
        image : "source image"

    }
}
export default BoxCTAMeta;

type BoxCTAStory = ComponentStory<typeof BoxCTA>
export const Basic : BoxCTAStory = (args) => <BoxCTA {...args} />