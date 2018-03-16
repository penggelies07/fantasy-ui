import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './Paragraphs.less'

export default class Paragraphs extends React.Component {
  render () {
    const {total = 3, className, style} = this.props

    const classString = classnames('Paragraphs', className)

    return (
      <div
        className={classString}
        style={style}
      >
        {Array(total).fill(0).map((_, i) => (
          <div key={i} className='Paragraphs-item'/>
        ))}
      </div>
    )
  }
}

Paragraphs.propTypes = {
  total: PropTypes.number
}
