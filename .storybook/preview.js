/* eslint-disable import/prefer-default-export, react/jsx-filename-extension */

import React, { useEffect } from 'react';
import { addDecorator } from '@storybook/react';
import { create } from '@storybook/theming';
import isChromatic from 'chromatic/isChromatic';
import { forceVisible } from 'react-lazyload';

import Fonts from './Fonts';

// eslint-disable-next-line react/prop-types
const Story = ({ story }) => {
  useEffect(() => {
    if (isChromatic()) {
      forceVisible(); // force load all images
    }
  }, []);

  return (
    <>
      <Fonts />
      {story()}
    </>
  );
};

addDecorator(story => <Story story={story} />);

const theme = create({
  base: 'light',
  brandTitle: 'BBC Simorgh',
  brandUrl: 'https://github.com/bbc/simorgh',
});

export const parameters = {
  passArgsFirst: false,
  options: {
    panelPosition: 'right',
    sidebarAnimcations: true,
    theme,
  },
};
