---
category: 表单
columns: double
title: Button
subtitle: 按钮
---

## 颜色类型

支持多种颜色

```js
import React from 'react'
import {Button} from 'fantasy-ui'

export default class ButtonType extends React.Component {
  render () {
    return (
      <div>
        <div className='mb10'>
          <Button>default</Button>
          <Button type='white'>white</Button>
          <Button type='primary'>primary</Button>
          <Button type='success'>success</Button>
          <Button type='warning'>warning</Button>
          <Button type='danger'>danger</Button>
          <Button type='info'>info</Button>
        </div>
        <div>
          <Button variant='gradient'>default</Button>
          <Button type='white' variant='gradient'>white</Button>
          <Button type='primary' variant='gradient'>primary</Button>
          <Button type='success' variant='gradient'>success</Button>
          <Button type='warning' variant='gradient'>warning</Button>
          <Button type='danger' variant='gradient'>danger</Button>
          <Button type='info' variant='gradient'>info</Button>
        </div>
      </div>
    )
  }
}
```

## 尺寸

设置按钮尺寸

```js
import React from 'react'
import {Button} from 'fantasy-ui'

export default class ButtonSize extends React.Component {
  render () {
    return (
      <div>
        <Button size='small'>small</Button>
        <Button>normal</Button>
        <Button size='large'>large</Button>
      </div>
    )
  }
}
```

## 样式选择

按钮样式展示

```js
import React from 'react'
import {Button} from 'fantasy-ui'

export default class ButtonVariant extends React.Component {
  render () {
    return (
      <div>
        <div className='mb10'>
          <Button type='info' variant='raised'>raised</Button>
          <Button type='info' variant='flat'>flat</Button>
          <Button type='info' variant='ring'>ring</Button>
          <Button type='info' variant='gradient'>gradient</Button>
        </div>
      </div>
    )
  }
}
```

## 图标按钮

图标按钮

```js
import React from 'react'
import {Button} from 'fantasy-ui'

export default class ButtonIcon extends React.Component {
  render () {
    return (
      <div>
        <div className='mb10'>
          <Button type='default' size='large' shape='circle' variant='raised' icon='grade' />
          <Button type='primary' size='large' shape='circle' variant='raised' icon='add' />
          <Button type='success' size='large' shape='circle' variant='raised'  icon='search' />
          <Button type='warning' size='large' shape='circle' variant='raised' icon='more_horiz' />
          <Button type='danger' size='large' shape='circle' variant='raised' icon='close' />
          <Button type='info' size='large' shape='circle' variant='raised' icon='menu' />
        </div>
        <div>
          <Button type='default' size='large' shape='circle' variant='gradient' icon='grade' />
          <Button type='primary' size='large' shape='circle' variant='gradient' icon='add' />
          <Button type='success' size='large' shape='circle' variant='gradient' icon='search' />
          <Button type='warning' size='large' shape='circle' variant='gradient' icon='more_horiz' />
          <Button type='danger' size='large' shape='circle' variant='gradient' icon='close' />
          <Button type='info' size='large' shape='circle' variant='gradient' icon='menu' />
        </div>
      </div>
    )
  }
}
```

## 圆角

设置按钮圆角

```js
import React from 'react'
import {Button} from 'fantasy-ui'

export default class ButtonShape extends React.Component {
  render () {
    return (
      <div>
        <Button>default</Button>
        <Button shape={10}>10px</Button>
        <Button shape='rectangle'>rectangle</Button>
        <Button shape='circle'>circle</Button>
      </div>
    )
  }
}
```

## 禁用

禁止点击

```js
import React from 'react'
import {Button} from 'fantasy-ui'

export default  class ButtonDisabled extends React.Component {
  render () {
    return (
      <div>
        <Button disabled>disabled</Button>
        <Button disabled type='primary' variant='raised'>disabled</Button>
        <Button disabled type='primary' variant='flat'>disabled</Button>
        <Button disabled type='primary' variant='ring'>disabled</Button>
        <Button disabled type='primary' variant='gradient'>disabled</Button>
      </div>
    )
  }
}
```

## 加载中

显示加载中动画

```js
import React from 'react'
import {Button} from 'fantasy-ui'

export default class ButtonLoading extends React.Component {
  render () {
    return (
      <div>
        <Button loading>loading</Button>
        <Button loading type='primary'>loading</Button>
      </div>
    )
  }
}
```

## 按钮组

将一系列按钮组合在一起，移除相互之间的间隙

```js
import React from 'react'
import {Button} from 'fantasy-ui'

export default class ButtonGroupNormal extends React.Component {
  render () {
    return (
      <div>
        <div className='mb10'>
          <Button.Group>
            <Button variant='ring'>1</Button>
            <Button variant='ring'>2</Button>
            <Button variant='ring'>3</Button>
          </Button.Group>
          <Button.Group>
            <Button variant='ring' icon='home' />
            <Button variant='ring' icon='menu' />
            <Button variant='ring' icon='search' />
          </Button.Group>
        </div>
        <div>
          <Button.Group fullWidth>
            <Button variant='ring' type='primary'>left</Button>
            <Button variant='ring' type='success' disabled>disabled</Button>
            <Button variant='ring' type='danger'>right</Button>
          </Button.Group>
        </div>
      </div>
    )
  }
}
```

## 垂直方向按钮组

```js
import React from 'react'
import {Button} from 'fantasy-ui'

export default class ButtonGroupVertical extends React.Component {
  render () {
    return (
      <div>
        <Button.Group direction='vertical'>
          <Button basic>上一首</Button>
          <Button basic>播放</Button>
          <Button basic>下一首</Button>
        </Button.Group>
        <Button.Group direction='vertical'>
          <Button basic icon='home' />
          <Button basic icon='menu' />
          <Button basic icon='search' />
        </Button.Group>
      </div>
    )
  }
}
```

## Button API

| 参数 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| size | 尺寸 | 'small' \| 'normal' \|'large' | 'normal' |
| type| 颜色类型 | 'default' \| 'white' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'white' \| 'black' | 'default' |
| nativeType | 原生按钮`type`，作用于表单 | 'button' \| 'submit' \| 'reset' | 'button' |
| shape | 形状 | 'number' \| 'rectangle' \| 'circle' | - |
| variant | 样式类型 | 'raised' \|'flat' \| 'ring' \| 'gradient' | 'raised' |
| icon | 图标 | string | - |
| fullWidth | 撑满父容器宽度 | boolean | false |
| disabled | 禁用 | boolean | false |
| loading | 加载中 | boolean | false |
| onClick | 点击时触发的事件 | (e: MouseEvent) => Promise \| void | - |

## Button.Group API

| 参数 | 说明 | 类型 | 默认值 |
|---|---|---|---|
| direction | 排列方向 | 'horizontal' \| 'vertical' | 'horizontal' |
| fullWidth | 是否撑满父元素宽度或高度 | boolean | false |
