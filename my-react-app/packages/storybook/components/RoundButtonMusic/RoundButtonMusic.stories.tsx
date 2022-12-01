import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons'; 

import RoundButtonMusic  from './RoundButtonMusic'
const RoundButtonMusicMeta: ComponentMeta<typeof RoundButtonMusic> = {
    title: 'RoundButtonMusic Component',
    component: RoundButtonMusic,
    argTypes:{

    },
    args: {

        backgroundColor : "blue",
        icon :  <AntDesign name="play" size={24} color="red" />,
        onClickButton : ()=> {console.log("Onclick")}
        

    }
}
export default RoundButtonMusicMeta;

type RoundButtonMusicStory = ComponentStory<typeof RoundButtonMusic>
export const BasicPlay : RoundButtonMusicStory = (args) => <RoundButtonMusic {...args} />
export const BasicPause : RoundButtonMusicStory = (args) => <RoundButtonMusic {...args} />
BasicPause.args = {
    ...BasicPlay.args,
    
        icon : <AntDesign name="pause" size={24} color="white" />
    
}

export const BasicPlay2 : RoundButtonMusicStory = (args) => <RoundButtonMusic {...args} />
BasicPlay2.args = {
    ...BasicPlay.args,
    
        icon : <Entypo name="controller-play" size={24} color="black" />
    
}
/*
<AntDesign name="pause" size={24} color="black" />
        <AntDesign name="forward" size={24} color="black" />
        <AntDesign name="banckward" size={24} color="black" />
        <AntDesign name="caretright" size={24} color="black" />
        <AntDesign name="caretleft" size={24} color="black" />
*/