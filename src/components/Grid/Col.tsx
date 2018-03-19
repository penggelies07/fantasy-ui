import * as React from 'react'
import * as classnames from 'classnames'
import './Col.less'

const presetSizes = ['xs', 'sm', 'md', 'lg', 'xl']

export interface IColProps {
  span?: number
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  className?: string
  style?: React.CSSProperties
}

export default class Col extends React.Component<IColProps> {

  prefixCls = 'fui-Col'

  render () {
    const {
      span,
      className,
      style,
      children,
      ...sizes
    } = this.props

    // className
    const sizeClasses = presetSizes
      .map((size) => typeof sizes[size] === 'number' && `fui-Col-${size}-${sizes[size]}`)
      .filter((size) => !!size)
    
    if (!sizeClasses.length) {
      sizeClasses.push(`fui-Col-${span}`)
    }

    const classString = classnames(this.prefixCls, className, sizeClasses)

    return (
      <div className={classString} style={style}>
        {children}
      </div>
    )
  }
}