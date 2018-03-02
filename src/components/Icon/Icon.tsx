import * as React from 'react'
import * as classnames from 'classnames'
import {ColorType} from '../../commons/PropTypes'
import './Icon.less'

export interface IIconProps {
  color?: ColorType
  gradient?: string
  spinning?: boolean
  className?: string
  style?: React.CSSProperties
}

export default class Icon extends React.Component<IIconProps> {
  
  static defaultProps: IIconProps = {
    color: 'default'
  }

  prefixCls = 'fui-Icon'
  
  render () {
    const {
      color,
      spinning,
      className,
      style,
      children
    } = this.props
    
    // className
    const classString = classnames(this.prefixCls, 'material-icons', className, {
      [`${this.prefixCls}-spinning`]: !!spinning,
      [`${this.prefixCls}-${color}`]: !!color
    })
    
    return (
      <i
        className={classString}
        style={style}
      >
        {children}
      </i>
    )
  }
}