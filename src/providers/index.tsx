import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import { GridProvider } from '@faceless-ui/css-grid'
import { WindowInfoProvider } from '@payloadcms/ui'
import cssVariables from '../cssVariables'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <WindowInfoProvider
        breakpoints={{
          s: '(max-width: 768px)',
          m: '(max-width: 1024px)',
          l: '(max-width: 1279px)',
          xl: '(max-width: 1679px)',
          xxl: '(max-width: 1920px)',
        }}
      >
        <GridProvider
          breakpoints={{
            s: cssVariables.breakpoints.s,
            m: cssVariables.breakpoints.m,
            l: cssVariables.breakpoints.l,
          }}
          rowGap={{
            s: '1rem',
            m: '2rem',
            l: '3rem',
            xl: '4rem',
          }}
          colGap={{
            s: '10px',
            m: '16px',
            l: '3rem',
            xl: '4rem',
          }}
          cols={{
            s: 7,
            m: 9,
            l: 13,
            xl: 15,
          }}
        >
          
        <ThemeProvider>
          <HeaderThemeProvider>{children}</HeaderThemeProvider>
        </ThemeProvider>
      </GridProvider>
    </WindowInfoProvider>
  )
}
