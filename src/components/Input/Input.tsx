import * as React from 'react'
import * as classnames from 'classnames'
import {ColorType, SizeType, ShapeType, InputNativeType} from '../../commons/PropTypes'
import * as themeStyle from '../../commons/ThemeStyle'
import InputGroup from './InputGroup'
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

export interface IInputState {
  labelColor: string
}

export default class Input extends React.Component<IInputProps, IInputState> {

  static defaultProps: IInputProps = {
    type: 'default',
    nativeType: 'text',
    size: 'normal'
  }

  static Group = InputGroup

  constructor (props: IInputProps) {
    super(props)
    this.state = {
      labelColor: themeStyle.match('default')
    }
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

  handleFocus = (e: React.FocusEvent<any>) => {
    const {type} = this.props
    const labelColor = type && themeStyle.match(type)
    this.setState({labelColor})

    const onFocus = this.props.onFocus || (() => {/* Do nothing */})

    onFocus(e)
  }

  handleBlur = (e: any) => {
    const labelColor = themeStyle.match('default')
    this.setState({labelColor})

    const onBlur = this.props.onBlur || (() => {/* Do nothing */})

    onBlur(e)
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
      onKeyDown
    } = this.props

    const {labelColor} = this.state

    // className
    const classString = classnames(this.prefixCls, className, {
      [`${this.prefixCls}-${type}`]: !!type,
      [`${this.prefixCls}-${size}`]: !!size,
      [`${this.prefixCls}-fullWidth`]: fullWidth,
      [`${this.prefixCls}-disabled`]: disabled,
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

    const labelStyles = Object.assign({}, labelStyle, {color: labelColor})

    const prefixEl = typeof prefix === 'string' ? <Icon>{prefix}</Icon> : prefix
    const suffixEl = typeof suffix === 'string' ? <Icon>{suffix}</Icon> : suffix

    return (
      <div className={classString} style={style}>
        {label && <label className={labelClass} style={labelStyles}>{label}</label>}
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
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            onKeyDown={onKeyDown}
          />
          {suffix && <div className='fui-Input-suffix'>{suffixEl}</div>}
        </div>
      </div>
    )
  }
}