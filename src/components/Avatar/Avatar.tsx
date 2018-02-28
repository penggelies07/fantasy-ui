import * as React from 'react'
import * as classnames from 'classnames'
import './Avatar.less'

export interface IAvatarProps {
  size?: 'small' | 'normal' | 'large'
  shape?: number | 'circle' | 'square'
  src?: string
  icon?: string
  title?: string
  className?: string
  style?: React.CSSProperties
}

export default class Avatar extends React.Component<IAvatarProps> {

  static defaultProps = {
    size: 'normal',
    shape: 'square'
  }

  render () {
    const {
      size,
      shape,
      src,
      icon,
      title,
      className,
      style,
      children
    } = this.props

    

    return (
      <div
        title={title}
      >
        {src && <img className='bui-avatar__img' src={src}/>}
      </div>
    )
  }
}
