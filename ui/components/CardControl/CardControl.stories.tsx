import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import CardControl  from './CardControl'
const CardControlMeta: ComponentMeta<typeof CardControl> = {
    title: 'CardControl Component',
    component: CardControl,
    argTypes:{

    },
    args: {

        durationMusic : 1

    }
}
export default CardControlMeta;

type CardControlStory = ComponentStory<typeof CardControl>
export const Basic : CardControlStory = (args) => <CardControl {...args} />