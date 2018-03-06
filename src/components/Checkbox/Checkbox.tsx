import * as React from 'react'
import * as classnames from 'classnames'
import {ColorType, SizeType} from '../../commons/PropTypes'
import './Checkbox.less'

export interface ICheckboxProps {
  type?: ColorType
  size?: SizeType
  value?: string
  checked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  className?: string
  style?: React.CSSProperties
  onChange?: (e: React.ChangeEvent<any>, checked: boolean, value?: string) => void
}

export interface ICheckboxState {
  checked: boolean
}

export default class Checkbox extends React.Component<ICheckboxProps, ICheckboxState> {

  static defaultProps = {
    size: 'normal',
    type: 'default'
  }

  prefixCls = 'fui-Checkbox'

  constructor (props: ICheckboxProps) {
    super(props)
    this.state = {
      checked: !!props.checked
    }
  }

  componentWillReceiveProps ({checked = false}: ICheckboxProps) {
    if (this.props.checked !== checked) {
      this.setState({checked})
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, disabled} = this.props

    if (disabled) {
      return
    }

    const checked = e.target.checked
    const onChange = this.props.onChange || (() => {/* Do nothing */})

    if (!('checked' in this.props)) {
      this.setState({checked})
    }

    onChange(e, checked, value)
  }

  render () {
    const {
      type,
      size,
      disabled,
      indeterminate,
      className,
      style,
      children
    } = this.props

    const {checked} = this.state

    const classString = classnames(this.prefixCls, className, {
      [`${this.prefixCls}-${size}`]: !!size,
      [`${this.prefixCls}-checked`]: checked,
      [`${this.prefixCls}-indeterminate`]: indeterminate,
      [`${this.prefixCls}-disabled`]: disabled
    })

    const wrapperClass = classnames('fui-Checkbox-wrapper', {
      [`${this.prefixCls}-${type}`]: !!type,
    })

    return (
      <label className={classString} style={style}>
        <span className={wrapperClass}>
          <input
            type='Checkbox'
            checked={checked}
            disabled={disabled}
            className='fui-Checkbox-input'
            onChange={this.handleChange}
          />
        </span>
        <span className='fui-Checkbox-text'>{children}</span>
      </label>
    )
  }
}