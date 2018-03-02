import * as React from 'react'
import {withRouter} from 'react-router'
import {Avatar, Icon, Button} from 'fantasy-ui'
import 'fantasy-ui/index.css'

class App extends React.Component {
  render () {
    return (
      <div style={{background: '#f7f7f7'}}>
        <Avatar />

        <Icon color='primary' spinning>build</Icon>
        <Icon color='success'>data_usage</Icon>
        <Icon color='warning'>build</Icon>
        <Icon color='danger'>build</Icon>
        <Icon color='info'>build</Icon>
        <Icon>build</Icon>
        <Button loading>123</Button>

        <Button icon='data_usage' disabled/>
        <Button type='primary' fullWidth shape={10} icon='data_usage'>123</Button>
      </div>
    )
  }
}

export default withRouter(App)