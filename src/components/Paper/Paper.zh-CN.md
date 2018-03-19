---
category: 容器
columns: double
title: Paper
subtitle: 纸张
---

## 基本用法

一个带阴影的容器

```js
import React from 'react'
import {Paper} from 'fantasy-ui'
import Paragraphs from '../../commons/Paragraphs'

export default class PaperNormal extends React.Component {
  render () {
    return (
      <div className='pd30' style={{background: '#eee'}}>
        <Paper><Paragraphs /></Paper>
      </div>
    )
  }
}
```

## 升起

鼠标悬停时升起

```js
import React from 'react'
import {Paper} from 'fantasy-ui'
import Paragraphs from '../../commons/Paragraphs'

export default class PaperBordered extends React.Component {
  render () {
    return (
      <div className='pd30'>
        <Paper bordered className='mb10'><Paragraphs /></Paper>
        <Paper bordered raised><Paragraphs /></Paper>
      </div>
    )
  }
}
```

## 边框

显示边框，用于白色背景

```js
import React from 'react'
import {Paper} from 'fantasy-ui'
import Paragraphs from '../../commons/Paragraphs'

export default class PaperRaised extends React.Component {
  render () {
    return (
      <div className='pd30' style={{background: '#eee'}}>
        <Paper raised><Paragraphs /></Paper>
      </div>
    )
  }
}
```

## Paper API

| 参数 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| fullWidth | 撑满父容器 | boolean | false |
| bordered | 显示边框 | boolean | false |
| raised | 鼠标悬停时升起 | boolean | false |
