import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import RoundButton  from './RoundButton'
const RoundButtonMeta: ComponentMeta<typeof RoundButton> = {
    title: 'RoundButton Component',
    component: RoundButton,
    argTypes:{

    },
    args: {

        backgroundColor : 'red',
        icon : 'play'

    }
}
export default RoundButtonMeta;

type RoundButtonStory = ComponentStory<typeof RoundButton>
export const Basic : RoundButtonStory = (args) => <RoundButton {...args} />
export const ButtonWithoutColor : RoundButtonStory = (args) => <RoundButton {...args} />

ButtonWithoutColor.args={
    ...Basic.args,
    backgroundColor: '#00000000'

}