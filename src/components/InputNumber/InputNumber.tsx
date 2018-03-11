import * as React from 'react'
import * as classnames from 'classnames'
import {ColorType, SizeType, ShapeType} from '../../commons/PropTypes'
import * as themeStyle from '../../commons/ThemeStyle'
import Input from '../Input'
import './InputNumber.less'

export interface IInputNumberProps {
  type?: ColorType
  size?: SizeType
  shape?: ShapeType
  value?: number
  min?: number
  max?: number
  step?: number
  precision?: number
  placeholder?: string
  fullWidth?: boolean
  readOnly?: boolean
  autoFocus?: boolean
  disabled?: boolean
  disableBorder?: boolean
  showHandlers?: boolean
  label?: React.ReactNode | string
  suffix?: React.ReactNode | string
  formatter?: (value: number | string) => string
  parser?: (value: string) => number
  className?: string
  labelClassName?: string
  style?: React.CSSProperties
  labelStyle?: React.CSSProperties
  onChange?: (e: React.ChangeEvent<any>, value: string) => void
  onBlur?: React.FormEventHandler<any>
  onFocus?: React.FormEventHandler<any>
  onKeyDown?: React.FormEventHandler<any>
}

export interface IInputNumberState {}

export default class InputNumber extends React.Component<IInputNumberProps, IInputNumberState> {

  constructor (props: IInputNumberProps) {
    super(props)
    this.state = {}
  }

  prefixCls = 'fui-InputNumber'

  defaultFormatter = (value: number | string) => {
    return value.toString()
  }

  valueToString = (value?: number | string) => {
    const formatter = this.props.formatter || this.defaultFormatter
    return formatter(value || 0)
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

  renderHandlers = () => {
    return (
      <div>123</div>
    )
  }

  render () {
    const {
      value,
      disabled,
      showHandlers,
      className,
      ...rest
    } = this.props

    // className
    const classString = classnames(this.prefixCls, className)

    return (
      <Input
        {...rest}
        className={classString}
        value={this.valueToString(value)}
        suffix={!disabled && showHandlers && this.renderHandlers()}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      />
    )
  }
}