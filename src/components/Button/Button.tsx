import * as React from 'react'
import * as classnames from 'classnames'
import {SizeType, ColorType, ShapeType, NativeType} from '../../commons/PropTypes'
import Icon from '../Icon'
import './Button.less'

export interface IButtonProps {
  size?: SizeType
  type?: ColorType
  nativeType?: NativeType
  shape?: ShapeType
  gradient?: string
  icon?: string
  fullWidth?: boolean
  ghost?: boolean
  disabled?: boolean
  loading?: boolean
  className?: string
  style?: React.CSSProperties
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<any> | void
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>
  onMouseUp?: React.MouseEventHandler<HTMLButtonElement>
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>
}

export interface IButtonState {
  loading: boolean
}

export default class Button extends React.Component<IButtonProps, IButtonState> {

  static defaultProps: IButtonProps = {
    size: 'normal',
    type: 'default',
    nativeType: 'button'
  }

  // static Group = ButtonGroup

  prefixCls = 'fui-Button'
  
  constructor (props: IButtonProps) {
    super(props)
    this.state = {
      loading: !!props.loading
    }
  }

  render () {
    const {
      size,
      type,
      nativeType,
      shape,
      icon,
      fullWidth,
      ghost,
      disabled,
      loading,
      className,
      style,
      children
    } = this.props

    // className
    const classString = classnames(this.prefixCls, className, {
      [`${this.prefixCls}-${size}`]: !!size,
      [`${this.prefixCls}-${type}`]: !!type,
      [`${this.prefixCls}-fullWidth`]: fullWidth,
      [`${this.prefixCls}-onlyIcon`]: !!icon && !children,
      [`${this.prefixCls}-ghost`]: ghost,
      [`${this.prefixCls}-disabled`]: disabled,
      [`${this.prefixCls}-loading`]: loading
    })

    // style
    const borderRadius = shape &&
      shape === 'rectangle'
      ? '0'
      : shape === 'circle'
        ? '9999px'
        : shape + 'px'

    const styleString = Object.assign({}, style, {borderRadius})

    return (
      <button
        type={nativeType}
        disabled={disabled || loading}
        className={classString}
        style={styleString}
      >
        {
          loading
          ? <Icon spinning>data_usage</Icon>
          : icon && <Icon>{icon}</Icon>
        }
        {children && <span>{children}</span>}
      </button>
    )
  }
}