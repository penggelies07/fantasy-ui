import * as React from 'react'
import * as classnames from 'classnames'
import './Paper.less'

export interface IPaperProps {
  fullWidth?: boolean
  bordered?: boolean
  raised?: boolean
  className?: string
  style?: React.CSSProperties
}

export default class Paper extends React.Component<IPaperProps> {

  prefixCls = 'fui-Paper'

  render () {
    const {
      fullWidth,
      bordered,
      raised,
      className,
      style,
      children
    } = this.props

    // className
    const classString = classnames(this.prefixCls, className, {
      [`${this.prefixCls}-fullWidth`]: fullWidth,
      [`${this.prefixCls}-bordered`]: bordered,
      [`${this.prefixCls}-raised`]: raised
    })

    return (
      <div className={classString} style={style}>
        {children}
      </div>
    )
  }
}