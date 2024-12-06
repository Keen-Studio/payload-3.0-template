import React from 'react'
import classes from './index.module.scss'
import { Cell } from '@faceless-ui/css-grid'

const Divider = () => {
  return (
    <Cell colSpan={1}>
      <div className={classes.divider} />
    </Cell>
  )
}

export default Divider
