import * as React from 'react'
import * as classnames from 'classnames'
import {ColorType, SizeType, ShapeType} from '../../commons/PropTypes'
import Input from '../Input'
import './InputNumber.less'

const TIMER_DELAY = 600
const TIMER_INTERVAL = 200

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
  onChange?: (e: React.ChangeEvent<any>, value: number) => void
  onBlur?: React.FormEventHandler<any>
  onFocus?: React.FormEventHandler<any>
  onKeyDown?: React.FormEventHandler<any>
}

export interface IInputNumberState {
  value: string
}

export default class InputNumber extends React.Component<IInputNumberProps, IInputNumberState> {

  static defaultProps: IInputNumberProps = {
    value: 0,
    step: 1,
    showHandlers: true
  }

  constructor (props: IInputNumberProps) {
    super(props)
    this.state = {
      value: `${props.value || 0}`
    }
  }

  prefixCls = 'fui-InputNumber'

  focused: boolean
  lastValidValue: number = 0
  
  delayTimer: any
  stepTimer: any

  componentWillReceiveProps ({value = 0}: IInputNumberProps) {
    if (value !== this.props.value) {
      if (this.focused) {
        return
      } else {
        this.setState({value: value.toString()})
      }
    }
  }

  componentWillUnmount () {
    this.onClearTimer()
  }

  defaultFormatter = (value: number | string) => {
    return value.toString()
  }

  defaultParser = (value: string) => {
    return Number(value.replace(/[^\d.-]/g, ''))
  }

  toValidValue = (value: number) => {
    const {min, max, precision} = this.props

    if (precision && precision >= 0) {
      value = Number(value.toFixed(precision))
    }

    if (min && value < min) {
      value = min
    }

    if (max && value > max) {
      value = max
    }

    return value
  }

  valueToNumber = (value: string) => {
    const parser  = this.props.parser || this.defaultParser
    let _value = parser(value)

    if (isNaN(_value)) {
      _value = this.lastValidValue
    } else {
      this.lastValidValue = _value
    }

    return this.toValidValue(_value)
  }

  valueToString = (value?: number | string) => {
    const formatter = this.props.formatter || this.defaultFormatter
    return formatter(value || 0)
  }

  handleChange = (e: React.ChangeEvent<any>, value: string) => {
    this.setState({value})

    const onChange = this.props.onChange || (() => {/* Do nothing */})
    onChange(e, this.valueToNumber(value))
  }

  handleFocus = (e: React.FocusEvent<any>) => {
    const onFocus = this.props.onFocus || (() => {/* Do nothing */})

    onFocus(e)
  }

  handleBlur = (e: React.FormEvent<any>) => {
    const onBlur = this.props.onBlur || (() => {/* Do nothing */})

    onBlur(e)

    const value = this.valueToNumber(this.state.value).toString()
    this.setState({value})
  }

  onStep = (e: React.MouseEvent<any>, value: number) => {
    value = this.valueToNumber(value.toString())
    this.setState({value: value.toString()})

    const onChange = this.props.onChange || (() => {/* Do nothing */})
    onChange(e, value)
  }

  onStepUp = (e: React.MouseEvent<any>) => {
    const {value = 0, step = 1} = this.props
    this.onStep(e, (value + step))
  }

  onStepDown = (e: React.MouseEvent<any>) => {
    const {value = 0, step = 1} = this.props
    this.onStep(e, (value - step))
  }

  onSetStepUpTimer = (e: React.MouseEvent<any>) => {
    this.delayTimer = setTimeout(() => {
      this.stepTimer = setInterval(() => {
        this.onStepUp(e)
      }, TIMER_INTERVAL)
    }, TIMER_DELAY)
  }

  onSetStepDownTimer = (e: React.MouseEvent<any>) => {
    this.delayTimer = setTimeout(() => {
      this.stepTimer = setInterval(() => {
        this.onStepDown(e)
      }, TIMER_INTERVAL)
    }, TIMER_DELAY)
  }

  onClearTimer = () => {
    clearTimeout(this.delayTimer)
    clearTimeout(this.stepTimer)
  }

  renderHandlers = () => {
    return (
      <div className='fui-InputNumber-handlers'>
        <div
          className='fui-InputNumber-handlersUp'
          onClick={this.onStepUp}
          onMouseDown={this.onSetStepUpTimer}
          onMouseUp={this.onClearTimer}
        />
        <div
          className='fui-InputNumber-handlersDown'
          onClick={this.onStepDown}
          onMouseDown={this.onSetStepDownTimer}
          onMouseUp={this.onClearTimer}
        />
      </div>
    )
  }

  render () {
    const {
      disabled,
      showHandlers,
      className,
      ...rest
    } = this.props

    const {value} = this.state

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