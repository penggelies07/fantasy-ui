import * as React from 'react'
import * as classnames from 'classnames'
import {SizeType} from '../../commons/PropTypes'
import ListItem from './ListItem'
import './List.less'

export interface IListProps {
  size?: SizeType
  title?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default class List extends React.Component<IListProps> {

  static defaultProps: IListProps = {
    size: 'normal'
  }

  static Item = ListItem

  prefixCls = 'fui-List'

  render () {
    const {
      size,
      title,
      className,
      style,
      children
    } = this.props

    // className
    const classString = classnames(this.prefixCls, className, {
      [`${this.prefixCls}-${size}`]: !!size
    })

    return (
      <div className={classString} style={style}>
        {title && <div className='fui-List-title'>{title}</div>}
        {children}
      </div>
    )
  }
}