import React from 'react';
import type { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import theme from '@styles/theme';


type Props = {children: ReactNode };

const DefaultLayout:FC<Props> = ({ children }) => (
  <main css={styled}>
    {children}
  </main>
);

const styled = css({
  color: theme.colors.default,
  fontSize: theme.fontSize.default,
  backgroundColor: theme.backgroundColor.default,
  h1: {
    color: theme.colors.title,
    fontSize: theme.fontSize.title,
    fontWeight: theme.fontWeight.bold,
    marginBottom: '20px'
  }
});

export default DefaultLayout;