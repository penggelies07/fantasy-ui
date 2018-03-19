---
category: 数据显示
columns: double
title: Badge
subtitle: 徽标数
---

## 内容

徽标数

```js
import React from 'react'
import {Badge} from 'fantasy-ui'

export default class BadgeCount extends React.Component {
  render () {
    return (
      <div>
        <div className='ib mr30'>
          <Badge count='666'>
            <div className='s38' />
          </Badge>
        </div>
        <div className='ib mr30'>
          <Badge count={888}>
            <div className='s38' />
          </Badge>
        </div>
      </div>
    )
  }
}
```


## 颜色样式

支持多种颜色

```js
import React from 'react'
import {Badge} from 'fantasy-ui'

export default class BadgeType extends React.Component {
  render () {
    return (
      <div>
        <div>
          <div className='ib mr30'>
            <Badge count='1' type='default'>
              <div className='s38' />
            </Badge>
          </div>
          <div className='ib mr30'>
            <Badge count='1' type='primary'>
              <div className='s38' />
            </Badge>
          </div>
          <div className='ib mr30'>
            <Badge count='1' type='success'>
              <div className='s38' />
            </Badge>
          </div>
          <div className='ib mr30'>
            <Badge count='1' type='warning'>
              <div className='s38' />
            </Badge>
          </div>
          <div className='ib mr30'>
            <Badge count='1' type='danger'>
              <div className='s38' />
            </Badge>
          </div>
          <div className='ib mr30'>
            <Badge count='1' type='info'>
              <div className='s38' />
            </Badge>
          </div>
        </div>
        <div>
          <div className='ib mr30'>
            <Badge dot type='default'>
              <div className='s38' />
            </Badge>
          </div>
          <div className='ib mr30'>
            <Badge dot type='primary'>
              <div className='s38' />
            </Badge>
          </div>
          <div className='ib mr30'>
            <Badge dot type='success'>
              <div className='s38' />
            </Badge>
          </div>
          <div className='ib mr30'>
            <Badge dot type='warning'>
              <div className='s38' />
            </Badge>
          </div>
          <div className='ib mr30'>
            <Badge dot type='danger'>
              <div className='s38' />
            </Badge>
          </div>
          <div className='ib mr30'>
            <Badge dot type='info'>
              <div className='s38' />
            </Badge>
          </div>
        </div>
      </div>
    )
  }
}
```

## 独立使用

不包裹任何元素

```js
import React from 'react'
import {Badge} from 'fantasy-ui'

export default class BadgeNoChildren extends React.Component {
  render () {
    return (
      <div>
        <div className='mb30'>
          <div className='ib mr30'>
            <Badge count='1' type='default' />
          </div>
          <div className='ib mr30'>
            <Badge count='1' type='primary' />
          </div>
          <div className='ib mr30'>
            <Badge count='1' type='success' />
          </div>
          <div className='ib mr30'>
            <Badge count='1' type='warning' />
          </div>
          <div className='ib mr30'>
            <Badge count='1' type='danger' />
          </div>
          <div className='ib mr30'>
            <Badge count='1' type='info' />
          </div>
        </div>
        <div>
          <div className='ib mr30'>
            <Badge dot type='default' />
          </div>
          <div className='ib mr30'>
            <Badge dot type='primary' />
          </div>
          <div className='ib mr30'>
            <Badge dot type='success' />
          </div>
          <div className='ib mr30'>
            <Badge dot type='warning' />
          </div>
          <div className='ib mr30'>
            <Badge dot type='danger' />
          </div>
          <div className='ib mr30'>
            <Badge dot type='info' />
          </div>
        </div>
      </div>
    )
  }
}
```

## 显示小点

没有内容的显示

```js
import React from 'react'
import {Badge} from 'fantasy-ui'

export default class BadgeDot extends React.Component {
  render () {
    return (
      <div>
        <div className='ib mr30'>
          <Badge dot>
            <div className='s38' />
          </Badge>
        </div>
      </div>
    )
  }
}
```

## 范围设置

超出设定范围显示为设定最大值+

```js
import React from 'react'
import {Badge} from 'fantasy-ui'

export default class BadgeOverflowCount extends React.Component {
  render () {
    return (
      <div>
        <div>
          <div className='ib mr30'>
            <Badge count='100' type='primary'>
              <div className='s38' />
            </Badge>
          </div>
          <div className='ib mr30'>
            <Badge count={21} overflowCount={20} type='primary'>
              <div className='s38' />
            </Badge>
          </div>
        </div>
      </div>
    )
  }
}
```

## 偏移位置设置

改变徽标位置

```js
import React from 'react'
import {Badge} from 'fantasy-ui'

export default class BadgeOffset extends React.Component {
  render () {
    return (
      <div>
        <div>
          <div className='ib mr30'>
            <Badge count='0' type='danger'>
              <div className='s38' />
            </Badge>
          </div>
          <div className='ib mr30'>
            <Badge count='0' type='danger' offset={{top: '10px', right: '10px'}}>
              <div className='s38' />
            </Badge>
          </div>
        </div>
      </div>
    )
  }
}
```

## Badge API

| 参数 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| type | 颜色样式 | 'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' | 'default' |
| count | 内容 | number \| string | 0 |
| overflowCount | 最大数值(当count为number类型) | number | 99 |
| dot | 显示小点 | boolean | false |
| offset | 位置偏移 | {top?: string, right?: string} | - |
