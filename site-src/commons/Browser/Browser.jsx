import React from 'react'
import * as classnames from 'classnames'

export default class Browser extends React.Component {

  render () {
    const {className} = this.props

    return (
      <div className={classnames(className, 'Browser')} style={this.style()}>
        <div className='Browser__header'>
          <div className='Browser__action'/>
          <div className='Browser__action'/>
          <div className='Browser__action'/>
          <div className='Browser__address'/>
        </div>
        <div className='Browser__container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
