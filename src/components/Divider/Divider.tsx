import * as React from 'react'
import * as classnames from 'classnames'
import {DirectionType} from '../../commons/PropTypes'
import './Divider.less'

export interface IDividerProps {
  direction?: DirectionType
  light?: boolean
  className?: string
  style?: React.CSSProperties
}

export default class Divider extends React.Component<IDividerProps> {

  static defaultProps: IDividerProps = {
    direction: 'horizontal'
  }

  prefixCls = 'fui-Divider'

  render () {
    const {
      direction,
      light,
      className,
      style,
      children
    } = this.props

    // classString
    const classString = classnames(this.prefixCls, className, {
      [`${this.prefixCls}-${direction}`]: !!direction,
      [`${this.prefixCls}-light`]: light
    })

    return (
      <div className={classString} style={style}>
        {children && <span className='fui-Divider-content'>{children}</span>}
      </div>
    )
  }
}