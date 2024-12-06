import React from 'react'
import classes from './index.module.scss'
import { GutterProps } from '../../types/Layout/Gutter/types'

const Gutter: React.FC<GutterProps> = (props) => {
  const { children } = props
  return (
    <main className={classes.pageWrap}>
      <div className={classes.gutter}>{children}</div>
    </main>
  )
}

export default Gutter
