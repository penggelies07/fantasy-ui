import * as React from 'react'
import * as classnames from 'classnames'
import './ListItem.less'

export interface IListItemProps {
  value?: any
  selected?: boolean
  header?: React.ReactNode
  actions?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: (e: React.MouseEvent<HTMLDivElement>, value: any) => void 
}

export default class ListItem extends React.Component<IListItemProps> {

  prefixCls = 'fui-ListItem'

  handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const onClick = this.props.onClick || (() => {/* Do nothing */})
    const {value} = this.props

    onClick(e, value)
  }

  render () {
    const {
      selected,
      header,
      actions,
      className,
      style,
      children
    } = this.props

    const classString = classnames(this.prefixCls, className, {
      [`${this.prefixCls}-selected`]: selected
    })

    return (
      <div
        className={classString}
        style={style}
        onClick={this.handleClick}
      >  
        {header && <div className='fui-ListItem-header'>{header}</div>}
        {children && <div className='fui-ListItem-content'>{children}</div>}
        {actions && <div className='fui-ListItem-actions'>{actions}</div>}
      </div>
    )
  }
}