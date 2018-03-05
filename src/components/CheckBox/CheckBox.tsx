import * as React from 'react'
import * as classnames from 'classnames'
import {ColorType, SizeType} from '../../commons/PropTypes'
import './CheckBox.less'

export interface ICheckBoxProps {
  type?: ColorType
  size?: SizeType
  value?: string
  checked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  onChange?: (e: React.ChangeEvent<any>, checked: boolean, value?: string) => void
}

export interface ICheckBoxState {
  checked: boolean
}

export default class CheckBox extends React.Component<ICheckBoxProps, ICheckBoxState> {

  static defaultProps = {
    size: 'normal'
  }

  constructor (props: ICheckBoxProps) {
    super(props)
    this.state = {
      checked: !!props.checked
    }
  }

  render () {
    return (
      <div className='CheckBox'>CheckBox</div>
    )
  }
}