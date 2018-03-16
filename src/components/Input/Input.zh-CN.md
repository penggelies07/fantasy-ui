---
category: 表单
columns: double
title: Input
subtitle: 输入框
---

## 颜色

支持多种颜色

```js
import React from 'react'
import {Input} from 'fantasy-ui'

export default class InputColor extends React.Component {
  render () {
    return (
      <div>
        <Input className='mr10' placeholder='default' />
        <br/>
        <br/>
        <Input className='mr10' type='primary' placeholder='primary' />
        <br/>
        <br/>
        <Input className='mr10' type='success' placeholder='success' />
        <br/>
        <br/>
        <Input className='mr10' type='warning' placeholder='warning' />
        <br/>
        <br/>
        <Input className='mr10' type='danger' placeholder='danger' />
        <br/>
        <br/>
        <Input className='mr10' type='info' placeholder='info' />
        <br/>
        <br/>
      </div>
    )
  }
}
```

## 尺寸

不同尺寸的输入框

```js
import React from 'react'
import {Input} from 'fantasy-ui'

export default class InputSize extends React.Component {
  render () {
    return (
      <div>
        <Input size='small' placeholder='small' />
        <br/>
        <br/>
        <Input placeholder='normal' />
        <br/>
        <br/>
        <Input size='large' placeholder='large' />
      </div>
    )
  }
}
```

## 前缀元素和后缀元素

常用于显示图标

```js
import React from 'react'
import {Input} from 'fantasy-ui'

export default class InputPrefixAndSuffix extends React.Component {
  render () {
    return (
      <div>
        <Input prefix='person' suffix='search' />
      </div>
    )
  }
}
```

## 禁用

禁用输入框

```js
import React from 'react'
import {Input} from 'fantasy-ui'

export default class InputDisabled extends React.Component {
  render () {
    return (
      <div>
        <Input value='disabled' disabled />
      </div>
    )
  }
}
```

## 撑满父容器宽度

设置100%的宽度

```js
import React from 'react'
import {Input} from 'fantasy-ui'

export default class InputFullWidth extends React.Component {
  render () {
    return (
      <div>
        <Input fullWidth />
      </div>
    )
  }
}
```

## 圆角

设置输入框圆角

```js
import React from 'react'
import {Input} from 'fantasy-ui'

export default class InputShape extends React.Component {
  render () {
    return (
      <div>
        <Input placeholder='default' />
        <br/>
        <br/>
        <Input placeholder='rectangle' shape='rectangle' />
        <br/>
        <br/>
        <Input placeholder='circle' shape='circle' suffix='search' />
        <br/>
        <br/>
        <Input placeholder='10px' shape={10} />
      </div>
    )
  }
}
```

## 去除边框

去除边框

```js
import React from 'react'
import {Input} from 'fantasy-ui'

export default class InputDisableBorder extends React.Component {
  render () {
    return (
      <div>
        <Input placeholder='default' prefix='person' suffix='search' />
        <br/>
        <br/>
        <Input placeholder='disableBorder' disableBorder prefix='person' suffix='search' />
      </div>
    )
  }
}
```

## 小标题

增加小标题

```js
import React from 'react'
import {Input} from 'fantasy-ui'

export default class InputLabel extends React.Component {
  render () {
    return (
      <div>
        <Input placeholder='name' label='姓名' />
        <br/>
        <br/>
        <Input placeholder='name' label='姓名' type='info' />
      </div>
    )
  }
}
```

## 输入框组合

支持`Input`，`InputNumber`，`Button`

```js
import React from 'react'
import {Input, Button, InputNumber} from 'fantasy-ui'

export default class InputGroupNormal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 100
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e, value) {
    this.setState({value})
  }
  render () {
    const {value} = this.state
    return (
      <div>
        <Input.Group fullWidth className='mb10'>
          <Input placeholder='Area Code' />
          <Input placeholder='Phone Number' style={{flex: 2}} />
          <Button>Confirm</Button>
        </Input.Group>
        <Input.Group fullWidth className='mb10' header='Age'>
          <InputNumber placeholder='min' value={value} onChange={this.handleChange} />
          <Input placeholder='~' disabled style={{textAlign: 'center', flex: 'none', width: '30px'}} />
          <Input placeholder='Input'  />
        </Input.Group>
        <Input.Group fullWidth className='mb10' header='http://' footer='.com'>
          <Input />
        </Input.Group>
      </div>
    )
  }
}
```

## Input API

| 参数 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| size | 尺寸 | 'small' \| 'normal' \|'large' | 'normal' |
| type | 类型 | 'text' \| 'password' | 'text' |
| value | 输入框的值 | string | - |
| placeholder | 提示 | string | - |
| readOnly | 只读 | boolean | false |
| disabled | 禁用 | boolean | false |
| full | 撑满父容器宽度 | boolean | false |
| shape | 圆角 | 'number' \|'square' \| 'circle' | - |
| autoFocus | 自动获取焦点 | boolean | false |
| prefix | 前缀元素 | Icon \| string | - |
| suffix | 后缀元素 | Icon \| string | - |
| onChange | 输入框值改变时触发的事件 | (e: ChangeEvent, value: string) => void | - |
| onFocus | 输入框获取焦点时触发的事件 | (e: FormEvent) => void | - |
| onBlur | 输入框失去焦点时触发的事件 | (e: FormEvent) => void | - |
| onKeyDown | 在输入框按下键盘时触发的事件 | (e: FormEvent) => void | - |

## Input.Group API

| 参数 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| full | 是否撑满父容器宽度 | boolean | false |
| header | 头部文本 | React.ReactNode | - |
| footer | 尾部文本 | React.ReactNode | - |
