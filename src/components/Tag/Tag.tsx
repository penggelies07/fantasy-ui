import * as React from 'react'
import {ColorType, SizeType, ShapeType} from '../../commons/PropTypes'
import './Tag.less'

export interface ITagProps {
  type?: ColorType
  size?: SizeType
  radius?: ShapeType
  avatar?: React.ReactNode
  label?: string
  closable?: boolean
  clickable?: boolean
  deleteIcon?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLDivElement>
  onClose?: React.MouseEventHandler<HTMLSpanElement>
}

export default class Tag extends React.Component<ITagProps> {

  constructor (props: ITagProps) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='Tag'>Tag</div>
    )
  }
}