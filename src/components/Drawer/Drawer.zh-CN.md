---
category: 容器
columns: double
title: Drawer
subtitle: 侧滑面板
---

## 基本用法

从侧边滑出

```js
import React from 'react'
import Paragraphs from '../../commons/Paragraphs'
import Browser from '../../commons/Browser'
import {Drawer, Button} from 'fantasy-ui'

export default class DrawerNormal extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      visible: false
    }

    this.onToggle = this.onToggle.bind(this)
  }

  onToggle () {
    this.setState({visible: !this.state.visible})
  }

  render () {
    return (
      <div>
        <Browser>
          <div style={{position: 'relative', overflow: 'hidden', padding: '10px', height: '100%'}}>
            <Paragraphs className='mb10' total={10}/>
            <Button onClick={this.onToggle}>show</Button>
            <Drawer
              className='pd10'
              width={300}
              visible={this.state.visible}
              onChange={(e, v) => this.setState({visible: v})}
            >
              <Paragraphs className='mb10' total={8}/>
              <Button onClick={this.onToggle}>hide</Button>
            </Drawer>
          </div>
        </Browser>
      </div>
    )
  }
}
```

## 固定

固定到body

```js
import React from 'react'
import Paragraphs from '../../commons/Paragraphs'
import Browser from '../../commons/Browser'
import {Drawer, Button} from 'fantasy-ui'

export default class DrawerFixed extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      visible: false
    }

    this.onToggle = this.onToggle.bind(this)
  }

  onToggle () {
    this.setState({visible: !this.state.visible})
  }

  render () {
    return (
      <div>
        <Browser>
          <div style={{position: 'relative', overflow: 'hidden', padding: '10px', height: '100%'}}>
            <Paragraphs className='mb10' total={10}/>
            <Button onClick={this.onToggle}>show</Button>
            <Drawer
              className='pd10'
              fixed
              width={300}
              visible={this.state.visible}
              onChange={(e, v) => this.setState({visible: v})}
            >
              <Paragraphs className='mb10' total={8}/>
              <Button onClick={this.onToggle}>hide</Button>
            </Drawer>
          </div>
        </Browser>
      </div>
    )
  }
}
```

## Drawer API

| 参数 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| anchor | 位置 | 'left' \| 'right' | 'left' |
| width | 宽度 | number \| string | '700px' |
| visible | 是否显示 | boolean | false |
| fixed | 固定到body | boolean | false |
| overlayVisible | 是否显示阴影  | boolean | true |
| onChange | visible改变时触发的事件 | (e: ChangeEvent, value: boolean) => void | - |
