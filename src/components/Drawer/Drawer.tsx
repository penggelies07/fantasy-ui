import * as React from 'react'
import * as classnames from 'classnames'
import * as CSSTransition from 'react-transition-group/CSSTransition'
import {AnchorType} from '../../commons/PropTypes'
import Overlay from '../internal/Overlay'
import './Drawer.less'

export interface IDrawerProps {
  anchor?: AnchorType
  visible: boolean
  width?: number
  className?: string
  style?: React.CSSProperties
  containerClassName?: string
  containerStyle?: React.CSSProperties
  overlayClassName?: string
  overlayStyle?: React.CSSProperties
  onChange?: (e: React.ChangeEvent<any>, value: boolean) => void
}

export interface IDrawerState {
  visible: boolean
}

export default class Drawer extends React.Component<IDrawerProps, IDrawerState> {

  static defaultProps = {
    visible: false,
    width: 300,
    anchor: 'left'
  }

  constructor (props: IDrawerProps) {
    super(props)
    this.state = {
      visible: false
    }
  }

  prefixCls = 'fui-Drawer'

  componentWillReceiveProps (nextProps: any) {
    if (nextProps.visible !== this.state.visible) {
      this.setState({visible: nextProps.visible})
    }
  }

  onClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (this.props.onChange) {
      this.props.onChange(e, false)
    }
    this.setState({visible: false})
  }

  render () {
    const {
      width,
      anchor,
      className,
      style,
      containerClassName,
      containerStyle,
      overlayClassName,
      overlayStyle,
      children
    } = this.props

    const {
      visible
    } = this.state

    // className
    const classString = classnames(this.prefixCls, className)

    const containerClassString = classnames('fui-Drawer-inner', containerClassName, {
      [`Drawer-${anchor}`]: !!anchor
    })

    // string
    const containerStyleString = Object.assign({width}, containerStyle)

    return (
      <div className={classString} style={style}>
        <Overlay
          className={overlayClassName}
          style={overlayStyle}
          visible={visible}
          onClick={this.onClose}
        />

        <CSSTransition
          classNames='fui-Drawer-inner'
          mountOnEnter
          unmountOnExit
          in={visible}
          timeout={300}
        >
          <div className={containerClassString} style={containerStyleString}>
            {children}
          </div>
        </CSSTransition>
      </div>
    )
  }
}