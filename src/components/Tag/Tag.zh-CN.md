---
category: 数据展示
columns: double
title: Tag
subtitle: 标签
---

## 颜色

支持多种颜色

```js
import React from 'react'
import {Tag} from 'fantasy-ui'

export default class TagColor extends React.Component {
  render () {
    return (
      <div>
        <Tag label='default' />
        <Tag type='primary' label='primary' />
        <Tag type='success' label='success' />
        <Tag type='warning' label='warning' />
        <Tag type='danger' label='danger' />
        <Tag type='info' label='info' />
      </div>
    )
  }
}
```

## 尺寸

不同尺寸的标签

```js
import React from 'react'
import {Tag} from 'fantasy-ui'

export default class TagSize extends React.Component {
  render () {
    return (
      <div>
        <Tag size='small' label='small' />
        <Tag label='normal' />
        <Tag size='large' label='large' />
      </div>
    )
  }
}
```

## 圆角

设置圆角大小

```js
import React from 'react'
import {Tag} from 'fantasy-ui'

export default class TagShape extends React.Component {
  render () {
    return (
      <div>
        <Tag shape='circle' label='default' />
        <Tag shape='circle' type='primary' label='primary' />
        <Tag shape='circle' type='success' label='success' />
        <Tag shape='rectangle' type='warning' label='warning' />
        <Tag shape='rectangle' type='danger' label='danger' />
        <Tag shape='rectangle' type='info' label='info' />
      </div>
    )
  }
}
```

## 可关闭的

显示关闭按钮

```js
import React from 'react'
import {Tag} from 'fantasy-ui'

export default class TagClosable extends React.Component {
  render () {
    return (
      <div>
        <Tag closable label='default' />
        <Tag closable type='primary' label='primary' />
        <Tag closable type='success' label='success' />
        <Tag closable type='warning' label='warning' />
        <Tag closable type='danger' label='danger' />
        <Tag closable type='info' label='info' />
      </div>
    )
  }
}
```

## 标签头像

显示标签头像

```js
import React from 'react'
import {Tag} from 'fantasy-ui'

export default class TagAvatar extends React.Component {
  render () {
    return (
      <div>
        <Tag closable size='large' shape='circle' label='default' />
        <Tag closable size='large' shape='circle' label='info' avatar='http://shp.qpic.cn/bizmp/3wqsictOBp2lgRvXZiaLCuOjCMvNibzm13nKMmoAibGTzSL5g5D8VcOTtA/' />
        <Tag closable size='small' shape='circle' label='info' avatar='http://shp.qpic.cn/bizmp/3wqsictOBp2lgRvXZiaLCuOjCMvNibzm13nKMmoAibGTzSL5g5D8VcOTtA/' />
      </div>
    )
  }
}
```

## 标签关闭按钮图标

更改标签关闭按钮图标

```js
import React from 'react'
import {Tag, Icon} from 'fantasy-ui'

export default class TagDeleteIcon extends React.Component {
  render () {
    return (
      <div>
        <Tag closable size='large' shape='circle' label='default' />
        <Tag closable size='large' shape='circle' label='cancel' deleteIcon={<Icon>cancel</Icon>} />
      </div>
    )
  }
}
```

## Tag API

| 参数 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| type | 颜色 | 'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' | 'default' |
| size | 尺寸 | 'small' \| 'normal' \| 'large' | 'normal' |
| shape | 圆角大小 | 'number' \| 'rectangle' \| 'circle' | - |
| label | 标签内容 | string | - |
| clickable | 是否显示可点击样式 | boolean | false |
| closable | 是否显示关闭按钮 | boolean | false |
| avatar | 标签头像 | string | - |
| deleteIcon | 关闭按钮图标 | React.ReactNode | - |
| onClick | 点击标签时触发的事件 | (e: MouseEvent) => void | - |
| onClose | 点击关闭按钮时触发的事件 | (e: MouseEvent) => void | - |
