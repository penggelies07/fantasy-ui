import * as React from 'react'
import * as classnames from 'classnames'
import * as CSSTransition from 'react-transition-group/CSSTransition'
import {AnchorType} from '../../commons/PropTypes'
import Overlay from '../internal/Overlay'
import './Drawer.less'

export interface IDrawerProps {
  anchor?: AnchorType
  width?: number
  visible: boolean
  fixed?: boolean
  overlayVisible?: boolean
  className?: string
  style?: React.CSSProperties
  overlayClassName?: string
  overlayStyle?: React.CSSProperties
  onChange?: (e: React.ChangeEvent<any>, value: boolean) => void
}

export interface IDrawerState {
  visible: boolean
}

export default class Drawer extends React.Component<IDrawerProps, IDrawerState> {

  static defaultProps = {
    anchor: 'left',
    visible: false,
    width: 300,
    fixed: false,
    overlayVisible: true
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

  handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (this.props.onChange) {
      this.props.onChange(e, false)
    }
    this.setState({visible: false})
  }

  render () {
    const {
      anchor,
      width,
      fixed,
      overlayVisible,
      className,
      style,
      overlayClassName,
      overlayStyle,
      children
    } = this.props

    const {
      visible
    } = this.state

    // className
    const classString = classnames(this.prefixCls, className, {
      [`${this.prefixCls}-${anchor}`]: !!anchor,
      [`${this.prefixCls}-fixed`]: fixed
    })

    // string
    const styleString = Object.assign({width}, style)

    return (
      <div>
        {
          overlayVisible &&
          <Overlay
            className={overlayClassName}
            style={overlayStyle}
            visible={visible}
            fixed={fixed}
            onClick={this.handleClose}
          />
        }

        <CSSTransition
          classNames='fui-Drawer'
          mountOnEnter
          unmountOnExit
          in={visible}
          timeout={300}
        >
          <div className={classString} style={styleString}>
            {children}
          </div>
        </CSSTransition>
      </div>
    )
  }
}