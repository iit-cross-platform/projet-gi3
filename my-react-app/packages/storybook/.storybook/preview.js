import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

export const decorators = [
  (Story) => (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Story />
    </ApplicationProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
