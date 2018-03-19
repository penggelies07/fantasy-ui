---
category: 数据展示
columns: double
title: Icon
subtitle: 图标
---

## 基本用法

可使用的图标名称请查阅[material-icon](https://www.google.com/design/icons/)

```js
import React from 'react'
import {Icon} from 'fantasy-ui'

export default class IconNormal extends React.Component {
  render () {
    return (
      <div>
        <Icon className='mr10'>wb_sunny</Icon>
        <Icon className='mr10'>toys</Icon>
        <Icon className='mr10'>opacity</Icon>
        <Icon className='mr10'>grade</Icon>
        <Icon className='mr10'>cloud</Icon>
      </div>
    )
  }
}
```

## 颜色

支持多种颜色

```js
import React from 'react'
import {Icon} from 'fantasy-ui'

export default class IconColor extends React.Component {
  render () {
    return (
      <div>
        <Icon className='mr10'>grade</Icon>
        <Icon className='mr10' color='primary'>grade</Icon>
        <Icon className='mr10' color='success'>grade</Icon>
        <Icon className='mr10' color='warning'>grade</Icon>
        <Icon className='mr10' color='danger'>grade</Icon>
        <Icon className='mr10' color='info'>grade</Icon>
      </div>
    )
  }
}
```

## 旋转

旋转的图标

```js
import React from 'react'
import {Icon} from 'fantasy-ui'

export default class IconNormal extends React.Component {
  render () {
    return (
      <div>
        <Icon className='mr10' color='info' spinning>toys</Icon>
        <Icon className='mr10' color='warning' spinning>wb_sunny</Icon>
      </div>
    )
  }
}
```

## Icon API

| 参数 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| color | 颜色 | 'default' \| 'white' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' | 'default' |
| spinning | 旋转的 | boolean | false |
| children | 图标名称 | string | - |
