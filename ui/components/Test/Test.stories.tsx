import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import Test  from './Test'
const TestMeta: ComponentMeta<typeof Test> = {
    title: 'Test Component',
    component: Test,
    argTypes:{

    },
    args: {

    }
}
export default TestMeta;

type TestStory = ComponentStory<typeof Test>
export const Basic : TestStory = (args) => <Test />