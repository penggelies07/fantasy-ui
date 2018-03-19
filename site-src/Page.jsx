import React from 'react'
import toReactElement from 'jsonml-to-react-element'
import {ScrollBar, Paper} from 'fantasy-ui'

import * as components from './components'
import GettingStarted from './docs/getting-started.zh-CN'
import WaterFall from './commons/WaterFall'
import Example from './commons/Example'
import './Page.less'

export default class Page extends React.Component {

  componentWillMount () {
    const name = this.props.match.params.name
    this.component = components[name]
  }

  componentWillReceiveProps (nextProps) {
    const name = nextProps.match.params.name
    this.component = components[name]
  }

  render () {
    if (!this.component) {
      return (
        <ScrollBar className='Page'>
          {toReactElement(GettingStarted)}
        </ScrollBar>
      )
    }

    const {meta, demos, apis} = this.component

    return (
      <ScrollBar className='Page'>
        <div className='Page-header'>
          <h2 className='Page-title'>
            {meta.title}&nbsp;
            <span>{meta.subtitle}</span>
          </h2>
        </div>
        <div className='Page-content'>
          <Paper>
            <WaterFall
              items={demos}
              columns={meta.columns}
              template={(demo) => (
                <Example
                  key={demo.key}
                  title={demo.title}
                  description={demo.description}
                  raw={demo.raw}
                  component={demo.component}
                />
              )}
            />
            {apis.map((api) => (
              <Example key={api.title} title={api.title} description={api.content}/>
            ))}
          </Paper>
        </div>
      </ScrollBar>
    )
  }
}
