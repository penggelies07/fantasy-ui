import * as React from 'react'
import {withRouter} from 'react-router'
import {Avatar, Icon, Button, Badge, Paper, ScrollBar, Divider, Checkbox, Drawer, Input, InputNumber, Tag, List, Col, Row} from 'fantasy-ui'
import 'fantasy-ui/index.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      a: 100,
      visible: false,
      values: []
    }

    this.onChange = this.onChange.bind(this)
    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.onToggle = this.onToggle.bind(this)
  }

  onChange (e, value) {
    this.setState({a: value})
  }

  toggleDrawer () {
    const {visible} = this.state
    this.setState({visible: !visible})
  }

  onToggle (e, value) {
    const values = this.state.values

    if (this.isSelected(value)) {
      this.setState({values: values.filter((v) => v !== value)})
    } else {
      this.setState({values: [...values, value]})
    }
  }

  isSelected (value) {
    return !!this.state.values.find((v) => v === value)
  }


  render () {
    const {a, visible} = this.state
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

        <Tag label='哈哈' type='primary' clickable size='small' shape='circle' closable
        deleteIcon={
          <Icon>build</Icon>
        } />
         <Tag label='哈哈' type='primary' clickable size='normal' shape='circle' closable
        deleteIcon={
          <Icon>build</Icon>
        } />
        <Tag label='哈哈' type='primary' clickable size='large' shape='circle' closable
        deleteIcon={
          <Icon>build</Icon>
        } />

        <div>
          <InputNumber showHandlers value={a} onChange={this.onChange}/>
          
          <Button icon='data_usage' variant='gradient' onClick={this.toggleDrawer}>开启抽屉</Button>
          <Drawer
            visible={visible}
            onChange={(e, v) => this.setState({visible: v})}
          />
        </div>
        <div>
          <Input />
          <Button >你和</Button>
        </div>
        <div>
          <List title='Fruits' size='large'>
            {['Apple', 'Banana', 'Pear', 'Orange'].map((value) => (
              <List.Item
                key={value}
                value={value}
                selected={this.isSelected(value)}
                onClick={this.onToggle}
              >{value}</List.Item>
            ))}
          </List>
        </div>
        <div>
          <Row gutter={10}>
            <Col span={2}><div className='mb10 g'
            style={{background: '#f3f3f3', minHeight: '50px', marginBottom: '10px'}}/></Col>
            <Col span={6}><div className='mb10 g'
            style={{background: '#f3f3f3', minHeight: '50px', marginBottom: '10px'}}/></Col>
            <Col span={2}><div className='mb10 g'
            style={{background: '#f3f3f3', minHeight: '50px', marginBottom: '10px'}}/></Col>
            <Col span={6}><div className='mb10 g'
            style={{background: '#f3f3f3', minHeight: '50px', marginBottom: '10px'}}/></Col>
            <Col span={2}><div className='mb10 g'
            style={{background: '#f3f3f3', minHeight: '50px', marginBottom: '10px'}}/></Col>
            <Col span={6}><div className='mb10 g'
            style={{background: '#f3f3f3', minHeight: '50px', marginBottom: '10px'}}/></Col>
          </Row>
          <Row gutter={10}>
            <Col xs={24} sm={12} md={8} lg={4} xl={2}><div className='mb10 g'
            style={{background: '#f3f3f3', minHeight: '50px', marginBottom: '10px'}}/></Col>
            <Col xs={24} sm={12} md={8} lg={4} xl={2}><div className='mb10 g'
            style={{background: '#f3f3f3', minHeight: '50px', marginBottom: '10px'}}/></Col>
            <Col xs={24} sm={12} md={8} lg={4} xl={2}><div className='mb10 g'
            style={{background: '#f3f3f3', minHeight: '50px', marginBottom: '10px'}}/></Col>
            <Col xs={24} sm={12} md={8} lg={4} xl={2}><div className='mb10 g'
            style={{background: '#f3f3f3', minHeight: '50px', marginBottom: '10px'}}/></Col>
            <Col xs={24} sm={12} md={8} lg={4} xl={2}><div className='mb10 g'
            style={{background: '#f3f3f3', minHeight: '50px', marginBottom: '10px'}}/></Col>
            <Col xs={24} sm={12} md={8} lg={4} xl={2}><div className='mb10 g'
            style={{background: '#f3f3f3', minHeight: '50px', marginBottom: '10px'}}/></Col>
          </Row>
          <Row gutter={10}>
            <Col span={12}><div className='mb10 g'
            style={{background: '#f3f3f3', minHeight: '50px', marginBottom: '10px'}}/></Col>
            <Col span={12}><div className='mb10 g'
            style={{background: '#f3f3f3', minHeight: '50px', marginBottom: '10px'}}/></Col>
          </Row>
          <Row gutter={10}>
            <Col span={24}><div className='mb10 g'
            style={{background: '#f3f3f3', minHeight: '50px', marginBottom: '10px'}}/></Col>
          </Row>
        </div>
        <div style={{display: 'flex', height: '168px'}}>
          <div style={{height: '200px', background: 'blue'}}></div>
          <Divider><Icon>tune</Icon></Divider>
          <div style={{height: '200px', background: 'blue'}}></div>
        </div>

        <div style={{height: '200px'}}>
          <ScrollBar>
            <div style={{padding: '10px'}}>
              <div style={{height: '700px', background: '#f7f7f7'}}></div>
            </div>
          </ScrollBar>
        </div>

        <div>
          <Paper bordered raised><div style={{height: '40px', background: '#f3f3f3'}}/></Paper>
        </div>
      </div>
    )
  }
}

export default withRouter(App)