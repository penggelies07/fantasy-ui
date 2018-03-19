import * as React from 'react'
import * as classnames from 'classnames'
import {DirectionType} from '../../commons/PropTypes'
import './ButtonGroup.less'

export interface IButtonGroupProps {
  fullWidth?: boolean
  direction?: DirectionType
  className?: string,
  style?: React.CSSProperties
}

export default class ButtonGroup extends React.Component<IButtonGroupProps> {

  static defaultProps: IButtonGroupProps = {
    direction: 'horizontal'
  }
  
  prefixCls = 'fui-ButtonGroup'

  render () {
    const {
      fullWidth,
      direction,
      className,
      style,
      children
    } = this.props

    const classString = classnames(this.prefixCls, className, {
      [`${this.prefixCls}-${direction}`]: !!direction,
      [`${this.prefixCls}-fullWidth`]: fullWidth
    })

    return (
      <div className={classString} style={style}>
        {children}
      </div>
    )
  }
}