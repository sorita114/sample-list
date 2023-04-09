import React from 'react';
import type { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import theme from '@styles/theme';


type Props = {children : ReactNode };

const DefaultLayout: FC<Props> = ({children}) => {
  return (
    <main css={styled}>
      <section>{children}</section>
    </main>
  )
}

const styled = css({
  color: theme.colors.default,
  fontSize: theme.fontSize.default,
  backgroundColor: theme.backgroundColor.default, 
  height: '100vh',
  h1: {
    color: theme.colors.title,
    fontSize: theme.fontSize.title,
    fontWeight: theme.fontWeight.bold,
    marginBottom: '20px',
  },
  '> section': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
    width: 500,
  }
})

export default DefaultLayout;