import React from 'react'
import PropTypes from 'prop-types'
import toReactElement from 'jsonml-to-react-element'
import prism from 'prismjs'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/themes/prism-solarizedlight.css'
import './Example.less'

import {ScrollBar, Paper} from 'fantasy-ui'

export default class Example extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      expanded: false
    }

    this.onToggle = this.onToggle.bind(this)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return this.state.expanded !== nextState.expanded
  }

  onToggle () {
    this.setState({expanded: !this.state.expanded})
  }

  render () {
    const {component: Component, title, raw, description} = this.props
    const {expanded} = this.state

    return (
      <div className='Example'>
        <h3 className="Example-title">
          # {title}
        </h3>
        <div className="Example-description">
          {toReactElement(description)}
        </div>
        {Component && (
          <div className='Example-demo'>
            <div className='Example-cooked'>
              <Component/>
              <div className='Example-toggle' onClick={this.onToggle}>{expanded ? '收起' : '展开'}</div>
            </div>
            {expanded && (
              <ScrollBar stopPropagation direction='horizontal' className='Example-raw'>
                <pre dangerouslySetInnerHTML={{__html: prism.highlight(raw, prism.languages.jsx)}}/>
              </ScrollBar>
            )}
          </div>
        )}
      </div>
    )
  }
}

Example.propTypes = {
  title: PropTypes.string,
  component: PropTypes.any,
  raw: PropTypes.string,
  description: PropTypes.array
}
