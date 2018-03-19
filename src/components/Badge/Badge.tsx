import * as React from 'react'
import * as classnames from 'classnames'
import {ColorType} from '../../commons/PropTypes'
import './Badge.less'

export interface IBadgeProps {
  type?: ColorType
  count?: number | string
  overflowCount?: number
  dot?: boolean
  offset?: {top?: string, right?: string}
  className?: string,
  style?: React.CSSProperties
}

export default class Badge extends React.Component<IBadgeProps> {

  static defaultProps: IBadgeProps = {
    count: 0,
    overflowCount: 99,
    type: 'default'
  }

  prefixCls = 'fui-Badge'

  render () {
    const {
      type,
      count,
      overflowCount,
      dot,
      offset,
      className,
      style,
      children
    } = this.props

    // className
    const classString = classnames(this.prefixCls, className, {
      [`${this.prefixCls}-${type}`]: !!type,
      [`${this.prefixCls}-float`]: !!children
    })

    const text = typeof count === 'number'
    ? overflowCount && (count > overflowCount)
    ? overflowCount + '+'
    : count > 0
    ? count
    : 0
    : count && count.trim()
    
    const el = dot
      ? <span className={`${this.prefixCls}-dot`} style={offset} />
      : text
        ? <span className={`${this.prefixCls}-count`} style={offset}>{text}</span>
        : null

    return (
      <span
        className={classString}
        style={style}
      >
        {children}
        {el}
      </span>
    )
  }
}