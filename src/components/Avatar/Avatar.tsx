import * as React from 'react'
import * as classnames from 'classnames'
import {SizeType, ShapeType} from '../../commons/PropTypes'
import './Avatar.less'

export interface IAvatarProps {
  size?: SizeType
  shape?: ShapeType
  src?: string
  title?: string
  className?: string
  style?: React.CSSProperties
}

export default class Avatar extends React.Component<IAvatarProps> {

  static defaultProps = {
    size: 'normal',
    shape: 'square'
  }
  
  prefixCls = 'fui-Avatar'

  render () {
    const {
      size,
      shape,
      src,
      title,
      className,
      style
    } = this.props

    // className
    const classString = classnames(this.prefixCls, className, {
      [`${this.prefixCls}-${size}`]: !!size

    })

    // style
    const borderRadius = shape &&
      shape === 'square'
      ? '2px'
      : shape === 'circle'
        ? '9999px'
        : shape + 'px'

    const styleString = Object.assign({}, style, {borderRadius})

    return (
      <div
        className={classString}
        style={styleString}
        title={title}
      >
        {src && <img src={src} />}
      </div>
    )
  }
}
