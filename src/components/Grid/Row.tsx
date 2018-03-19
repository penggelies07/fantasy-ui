import * as React from 'react'
import * as classnames from 'classnames'
import './Row.less'

export interface IRowProps {
  gutter?: number
  className?: string
  style?: React.CSSProperties
}

export default class Row extends React.Component<IRowProps> {

  prefixCls = 'fui-Row'

  render () {
    const {
      gutter = 0,
      className,
      style,
      children
    } = this.props

    // className
    const classString = classnames(this.prefixCls, className)

    // style
    const space = gutter > 0 ? gutter / 2 : 0
    const rowStyle = space > 0 ? {marginLeft: -space, marginRight: -space} : undefined
    const colStyle = space > 0 ? {paddingLeft: space, paddingRight: space} : undefined
    
    const styleString = Object.assign({}, style, rowStyle)

    const cols = React.Children
      .map(children, (col: React.ReactElement<any>) => React.cloneElement(col, {style: colStyle}))
    
    return (
      <div className={classString} style={styleString}>
        {cols}
      </div>
    )
  }
}