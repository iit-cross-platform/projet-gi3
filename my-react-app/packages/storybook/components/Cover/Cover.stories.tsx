import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import Cover from './Cover';
const CoverMeta: ComponentMeta<typeof Cover> = {
  title: 'Cover Component',
  component: Cover,
  argTypes: {},
  args: {
    imageUrl:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg',
    borderRadius: 10,
  },
};
export default CoverMeta;

type CoverStory = ComponentStory<typeof Cover>;
export const Basic: CoverStory = (args) => <Cover {...args} />;
