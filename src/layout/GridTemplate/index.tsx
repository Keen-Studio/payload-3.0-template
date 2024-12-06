import { Cell, Grid } from '@faceless-ui/css-grid'
import React from 'react'

type Props = {
    children: React.ReactNode;
    className?: string;
}

// this is the default grid for the site. please refer to this documentation
// https://facelessui.com/docs/css-grid to learn the grid. it's a great thing.
// you'll wanna wrap all your blocks in it. make sure to only distribute 
// cols equating to exactly 14, 9, or 7 depending on screen size.

const GridTemplate: React.FC<Props> = ({ children, className }) => {
  return (
    <Grid>
        <Cell 
            cols={14}
            colsM={9}
            colsS={7}
            className={className}
        >
                {children}
        </Cell>
    </Grid>
  )
}

export default GridTemplate
