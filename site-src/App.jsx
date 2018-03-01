import * as React from 'react'
import {withRouter} from 'react-router'
import {Avatar} from 'fantasy-ui'
import 'fantasy-ui/index.css'

class App extends React.Component {
  render () {
    return (
      <div>
        <Avatar />
      </div>
    )
  }
}

export default withRouter(App)