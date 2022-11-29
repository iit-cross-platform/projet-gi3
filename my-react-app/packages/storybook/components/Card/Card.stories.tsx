import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { CardIIT } from './Card'
const CardIITMeta : ComponentMeta<typeof CardIIT> = {
    title : "card iit",
    component : CardIIT,
    argTypes:{
        colorButton : {control : {type : "color"}}
    },
    args:{
        a : '5',
        b: 'hello',
        colorButton :'red'
    }
}
export default CardIITMeta;

type CardIITStory = ComponentStory<typeof CardIIT>
export const Basic : CardIITStory = (args) => <CardIIT {...args} />