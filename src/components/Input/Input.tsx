import * as React from 'react'
import * as classnames from 'classnames'
import {ColorType, SizeType, ShapeType, InputNativeType} from '../../commons/PropTypes'
import Icon from '../Icon'
import './Input.less'

export interface IInputProps {
  type?: ColorType
  nativeType?: InputNativeType
  size?: SizeType
  shape?: ShapeType
  value?: string
  placeholder?: string
  fullWidth?: boolean
  readOnly?: boolean
  autoFocus?: boolean
  disabled?: boolean
  disableBorder?: boolean
  label?: React.ReactNode | string
  prefix?: React.ReactNode | string
  suffix?: React.ReactNode | string
  className?: string
  labelClassName?: string
  style?: React.CSSProperties
  labelStyle?: React.CSSProperties
  onChange?: (e: React.ChangeEvent<any>, value: string) => void
  onBlur?: React.FormEventHandler<any>
  onFocus?: React.FormEventHandler<any>
  onKeyDown?: React.FormEventHandler<any>
}

export default class Input extends React.Component<IInputProps> {

  static defaultProps: IInputProps = {
    type: 'default',
    nativeType: 'text',
    size: 'normal'
  }

  prefixCls = 'fui-Input'

  autoFocus = (el: HTMLInputElement) => {
    if (el && this.props.autoFocus) {
      el.focus()
    }
  }

  handleChange = (e: React.ChangeEvent<any>) => {
    const onChange = this.props.onChange || (() => {/* Do nothing */})
    
    onChange(e, e.target.value)
  }

  render () {
    const {
      type,
      nativeType,
      size,
      shape,
      value,
      placeholder,
      fullWidth,
      readOnly,
      disabled,
      disableBorder,
      label,
      prefix,
      suffix,
      className,
      labelClassName,
      style,
      labelStyle,
      onBlur,
      onFocus,
      onKeyDown
    } = this.props

    // className
    const classString = classnames(this.prefixCls, className, {
      [`${this.prefixCls}-${type}`]: !!type,
      [`${this.prefixCls}-${size}`]: !!size,
      [`${this.prefixCls}-fullWidth`]: fullWidth,
      [`${this.prefixCls}-disableBorder`]: disableBorder
    })

    const labelClass = classnames('fui-Input-label', labelClassName)

    const wrapperClass = classnames('fui-Input-wrapper', {
      [`${this.prefixCls}-hasPrefix`]: !!prefix,
      [`${this.prefixCls}-hasSuffix`]: !!suffix
    })
    // style
    const borderRadius = shape &&
      shape === 'rectangle'
      ? '0'
      : shape === 'circle'
        ? '9999px'
        : shape + 'px'

    const prefixEl = typeof prefix === 'string' ? <Icon>{prefix}</Icon> : prefix
    const suffixEl = typeof suffix === 'string' ? <Icon>{suffix}</Icon> : suffix

    return (
      <div className={classString} style={style}>
        <label className={labelClass} style={labelStyle}>{label}</label>
        <div className={wrapperClass}>
          {prefix && <div className='fui-Input-prefix'>{prefixEl}</div>}
          <input
            ref={this.autoFocus}
            type={nativeType}
            value={value}
            placeholder={placeholder}
            readOnly={readOnly}
            disabled={disabled}
            className='fui-Input-input'
            style={{borderRadius}}
            onChange={this.handleChange}
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
          />
          {suffix && <div className='fui-Input-suffix'>{suffixEl}</div>}
        </div>
      </div>
    )
  }
}