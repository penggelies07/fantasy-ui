import * as React from 'react'
import * as classnames from 'classnames'
import './InputGroup.less'

export interface IInputGroupProps {
  fullWidth?: boolean
  prefix?: React.ReactNode | string
  suffix?: React.ReactNode | string
  className?: string,
  style?: React.CSSProperties
}

export default class InputGroup extends React.Component<IInputGroupProps> {

  prefixCls = 'fui-InputGroup'

  render () {
    const {
      fullWidth,
      prefix,
      suffix,
      className,
      style,
      children
    } = this.props

    // className
    const classString = classnames(this.prefixCls, className, {
      [`${this.prefixCls}-fullWidth`]: fullWidth
    })

    return (
      <div className={classString} style={style}>
        {prefix && <div className='fui-InputGroup-prefix'>{prefix}</div>}
        {children}
        {suffix && <div className='fui-InputGroup-suffix'>{suffix}</div>}
      </div>
    )
  }
}