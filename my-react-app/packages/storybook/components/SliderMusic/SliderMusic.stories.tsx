import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import SliderMusic  from './SliderMusic'
const SliderMusicMeta: ComponentMeta<typeof SliderMusic> = {
    title: 'SliderMusic Component',
    component: SliderMusic,
    argTypes:{

    },
    args: {
        duration : 1,
        durationMax : 33,
        setDuration : (duration) => console.log("## parrent ## slider musique stories", duration)
    }
}
export default SliderMusicMeta;

type SliderMusicStory = ComponentStory<typeof SliderMusic>
export const Basic : SliderMusicStory = (args) => <SliderMusic {...args} />