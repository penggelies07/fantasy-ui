import * as React from 'react'
import * as classnames from 'classnames'
import {ColorType, SizeType, ShapeType} from '../../commons/PropTypes'
import Avatar from '../Avatar'
import Icon from '../Icon'
import './Tag.less'

export interface ITagProps {
  type?: ColorType
  size?: SizeType
  shape?: ShapeType
  label?: string
  clickable?: boolean
  closable?: boolean
  avatar?: string
  deleteIcon?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLDivElement>
  onClose?: React.MouseEventHandler<HTMLSpanElement>
}

export default class Tag extends React.Component<ITagProps> {

  static defaultProps = {
    type: 'default',
    size: 'normal'
  }

  prefixCls = 'fui-Tag'

  handleClose = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()

    const onClose = this.props.onClose || (() => {/* Do nothing */})
    onClose(e)
  }

  render () {
    const {
      type,
      size,
      shape,
      avatar,
      label,
      clickable,
      closable,
      deleteIcon,
      className,
      style,
      onClick
    } = this.props

    // className
    const classString = classnames(this.prefixCls, className, {
      [`${this.prefixCls}-${type}`]: !!type,
      [`${this.prefixCls}-${size}`]: !!size,
      [`${this.prefixCls}-clickable`]: clickable,
      [`${this.prefixCls}-closable`]: closable
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
      <div 
        className={classString}
        style={styleString}
        onClick={onClick}
      >
        {avatar && <div className='fui-Tag-avatar'><Avatar src={avatar} shape='circle' /></div>}
        <span className='fui-Tag-label'>{label}</span>
        {
          closable &&
          <span className='fui-Tag-close' onClick={this.handleClose}>
            {deleteIcon ? deleteIcon : <Icon>close</Icon>}
          </span>
        }
      </div>
    )
  }
}