import React from 'react'
import classes from './index.module.scss'

type PaddingProps = {
  children?: React.ReactNode
  padding?: PaddingType
  id?: string
  className?: string
}

export type PaddingType = {
  paddingTop?: ('small' | 'medium' | 'large') | null;
  paddingBottom?: ('small' | 'medium' | 'large') | null;
};

const Padding: React.FC<PaddingProps> = (props) => {
  const { padding, children, id, className } = props

  const paddingTopClass = `padding-top-${padding?.paddingTop}`
  const paddingBottomClass = `padding-bottom-${padding?.paddingBottom}`

  const paddingClasses = `${classes.padding} ${className} ${padding?.paddingTop && classes[paddingTopClass]} ${
    padding?.paddingBottom && classes[paddingBottomClass]
  }`

  return (
    <div id={id} className={paddingClasses}>
      {children}
    </div>
  )
}

export default Padding
