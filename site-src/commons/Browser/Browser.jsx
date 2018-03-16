import React from 'react'
import classnames from 'classnames'
import './Browser.less'

export default class Browser extends React.Component {

  render () {
    const {className, style} = this.props

    const classString = classnames('Browser', className)

    return (
      <div className={classString} style={style}>
        <div className='Browser-header'>
          <div className='Browser-action' />
          <div className='Browser-action' />
          <div className='Browser-action' />
          <div className='Browser-address' />
        </div>
        <div className='Browser-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
