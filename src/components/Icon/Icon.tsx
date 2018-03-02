import * as React from 'react'
import * as classnames from 'classnames'
import {ColorType} from '../../commons/PropTypes'
import './Icon.less'

export interface IIconProps {
  color?: ColorType
  spinning?: boolean
  className?: string
  style?: React.CSSProperties
}

export default class Icon extends React.Component<IIconProps> {
  
  static defaultProps: IIconProps = {
    color: 'default'
  }

  prefixCls = 'fui-Icon'
  
  presetColors = ['default', 'primary', 'secondary', 'success', 'warning', 'danger', 'info']

  render () {
    const {
      color,
      spinning,
      className,
      style,
      children
    } = this.props
    
    const classString = classnames(this.prefixCls, 'material-icons', className, {
      [`${this.prefixCls}-spinning`]: !!spinning,
      [`${this.prefixCls}-${color}`]: !!color && this.presetColors.indexOf(color) > -1
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