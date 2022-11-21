import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import Control  from './Control'
import RoundButton from '../RoundButton/RoundButton';
const ControlMeta: ComponentMeta<typeof Control> = {
    title: 'Control Component',
    component: Control,
    argTypes:{

    },
    args: {
        buttonPrev : <RoundButton backgroundColor="red" icon="prev"/>,
        buttonNext : <RoundButton backgroundColor="blue" icon="next"/>,
        buttonPlay : <RoundButton backgroundColor="yellow" icon="play"/>,
       


    }
}
export default ControlMeta;

type ControlStory = ComponentStory<typeof Control>
export const Basic : ControlStory = (args) => <Control {...args} />