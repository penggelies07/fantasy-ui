import * as React from 'react'
import * as classnames from 'classnames'
import {
  ColorType
} from '../../commons/PropTypes'
import './Badge.less'

export interface IBadgeProps {
  type?: ColorType
  count?: number | React.ReactNode
  overflowCount?: number
  showZero?: boolean
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

  constructor (props: IBadgeProps) {
    super(props)
    this.state = {}
  }

  render () {
    const {
      type,
      count,
      overflowCount,
      showZero,
      dot,
      className,
      style,
      children
    } = this.props

    const classString = classnames(this.prefixCls, className, {
      [`${this.prefixCls}-${type}`]: !!type
    })

    // const childrenString = dot
    //   ? <span className=`${this.prefixCls}-${type}`></span>
    //   : h

    return (
      <span
        className={classString}
        style={style}
      >
        {children}
      </span>
    )
  }
}