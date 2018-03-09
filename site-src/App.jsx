import * as React from 'react'
import {withRouter} from 'react-router'
import {Avatar, Icon, Button, Badge, Checkbox, Input, Tag} from 'fantasy-ui'
import 'fantasy-ui/index.css'

class App extends React.Component {
  render () {
    return (
      <div>
        <Avatar />

        <Icon color='primary' spinning>build</Icon>
        <Icon color='success'>data_usage</Icon>
        <Icon color='warning'>build</Icon>
        <Icon color='danger'>build</Icon>
        <Icon color='info'>build</Icon>
        <Icon>build</Icon>

        <Button variant='raised' type='default'>(raised\default)</Button>
        <Button variant='raised' type='white'>(raised\white)</Button>
        <Button variant='raised' type='primary'>(raised\primary)</Button>
        <Button variant='raised' type='success'>(raised\success)</Button>
        <Button variant='raised' type='warning'>(raised\warning)</Button>
        <Button variant='raised' type='danger'>(raised\danger)</Button>
        <Button variant='raised' type='info'>(raised\info)</Button>
        <Button variant='flat' type='default'>(flat\default)</Button>
        <Button variant='flat' type='white'>(flat\white)</Button>
        <Button variant='flat' type='success'>(flat\primary)</Button>
        <Button variant='ring' type='default'>(ring\default)</Button>
        <Button variant='ring' type='white'>(ring\white)</Button>
        <Button variant='ring' type='danger'>(ring\primary)</Button>
        <Button variant='gradient' type='primary'>(gradient\primary)</Button>
        <Button variant='gradient' type='success'>(gradient\success)</Button>
        <Button variant='gradient' type='danger'>(gradient\danger)</Button>
        <Button variant='gradient' type='warning'>(gradient\warning)</Button>
        <Button variant='gradient' type='info'>(gradient\info)</Button>
        
        <Button icon='data_usage' variant='gradient' />
        <Button type='white' fullWidth shape={10} icon='data_usage'>123</Button>
      
        <Button.Group fullWidth direction='vertical'>
          <Button>上一首</Button>
          <Button>播放</Button>
          <Button>下一首</Button>
        </Button.Group>

        <Badge count={1} type='primary'><Button>上一首</Button></Badge>
     
        <Checkbox size='large'>123</Checkbox>

        <Input placeholder='123123' label='123'fullWidth disableBorder prefix='tune' suffix='tune'/>
        <Input.Group fullWidth prefix='tune' suffix='tune'>
          <Input prefix='tune' suffix='tune'/>
        </Input.Group>

        <Tag label='123' type='primary' clickable closable />
      </div>
    )
  }
}

export default withRouter(App)