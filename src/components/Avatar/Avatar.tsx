import './Avatar.less'

import * as React from 'react'

export interface IAvatarProps {
  src?: string
  title?: string
}

export default class Avatar extends React.Component<IAvatarProps> {

  static defaultProps = {
    src: '',
    size: 'normal'
  }

  render () {
    const {src, title} = this.props

    return (
      <div
        title={title}
      >
        {src && <img className='bui-avatar__img' src={src}/>}
      </div>
    )
  }
}
