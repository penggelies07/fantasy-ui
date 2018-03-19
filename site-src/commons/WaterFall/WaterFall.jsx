import React from 'react'
import PropTypes from 'prop-types'

import {Col, Row} from 'fantasy-ui'

export default class WaterFall extends React.Component {

  constructor (props) {
    super(props)
  }

  isDoubleColumns () {
    return this.props.columns === 'double'
  }

  render () {
    const {template, items} = this.props

    return (
      <div>
        {items.map((item, i) => template(item, i))}
      </div>
    )
  }
}

WaterFall.propTypes = {
  items: PropTypes.array,
  columns: PropTypes.string,
  template: PropTypes.func
}
