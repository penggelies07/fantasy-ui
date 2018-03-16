import * as React from 'react'
import {withRouter} from 'react-router'
import {Route, Link} from 'react-router-dom'
import {
  Col,
  Divider,
  Icon,
  Input,
  Row,
  ScrollBar,
  List
} from 'fantasy-ui'
import 'fantasy-ui/index.css'
import './App.less'

import Page from './Page'
import components from './components'

const logo = require('./assets/logo.png')

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      searchKey: ''
    }

    this.onSearchKeyChange = this.onSearchKeyChange.bind(this)
    this.onSearchKeyClear = this.onSearchKeyClear.bind(this)
    this.onClickMenuItem = this.onClickMenuItem.bind(this)
  }

  onSearchKeyClear () {
    this.setState({searchKey: ''})
  }

  onSearchKeyChange (e, searchKey) {
    this.setState({searchKey: searchKey.toLowerCase()})
  }

  onClickMenuItem (e, value) {
    this.props.history.push(this.props.match.url + value)
  }

  render () {
    const {searchKey} = this.state
    const url = this.props.location.pathname.slice(1)
    const filteredComponents = components.filter((c) => c.meta.title.toLowerCase().indexOf(searchKey) > -1)

    return (
      <div className='App'>
        <Row className='App-wrapper'>
          <Col className='App-header' xs={24} sm={24} md={6} lg={6} xl={6}>
            <h1 className='App-title'>
              <img className='App-logo' src={logo} alt='Fantasy UI'/>
              <sup className='App-version'>v0.1</sup>
              <div className='App-subTitle'>React Components</div>
            </h1>
            <Divider light />
            <Input
              fullWidth
              value={searchKey}
              // placeholder={`A total of ${components.length}`}
              suffix={(
                <Icon onClick={this.onSearchKeyClear}>{searchKey ? 'close' : 'search'}</Icon>
              )}
              onChange={this.onSearchKeyChange}
            />
            <ScrollBar className='App-menu'>
              <List size='large'>
                {/* <a href='https://github.com/varHarrie/bright-ui'>
                  <List.Item><Icon name='github'>GitHub</Icon></List.Item>
                </a> */}
                <Link to='/'>
                  <List.Item selected={url === ''}><Icon name='book'>快速上手</Icon></List.Item>
                </Link>
                {filteredComponents.map((component) => (
                  <List.Item
                    key={component.meta.title}
                    selected={url === component.meta.title}
                    value={component.meta.title}
                    onClick={this.onClickMenuItem}>
                    {component.meta.title}&nbsp;{component.meta.subtitle || ''}
                  </List.Item>
                ))}
              </List>
            </ScrollBar>
          </Col>
          <Col className='App-content' xs={24} sm={24} md={18} lg={18} xl={18}>
            <Route path='/:name?' component={Page}/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default withRouter(App)