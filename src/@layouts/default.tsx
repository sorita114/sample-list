import React from 'react';
import type { FC, ReactNode } from 'react';


type Props = {children : ReactNode };

const DefaultLayout: FC<Props> = ({children}) => {
  return (
    <main>
      <section>{children}</section>
    </main>
  )
}

export default DefaultLayout;