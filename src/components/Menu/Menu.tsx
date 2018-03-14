import * as React from 'react'
import './Menu.less'

export interface IMenuProps {}

export interface IMenuState {}

export default class Menu extends React.Component<IMenuProps, IMenuState> {

  constructor (props: IMenuProps) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='Menu'>Menu</div>
    )
  }
}