import React from 'react'
import * as classnames from 'classnames'
import PropTypes from 'prop-types'
import './Paragraphs.less'

export default class Paragraphs extends React.Component {
  render () {
    const {total = 3, className, style} = this.props

    return (
      <div
        className={classnames(className, 'Paragraphs')}
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
