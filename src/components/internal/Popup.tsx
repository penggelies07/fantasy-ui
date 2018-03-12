import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Popper from 'popper.js'

export type AnchorType = 'auto' | 'top' | 'right' | 'bottom' | 'left'
| 'auto-start' | 'top-start' | 'right-start' | 'bottom-start' | 'left-start'
| 'auto-end' | 'top-end' | 'right-end' | 'bottom-end' | 'left-end'

export interface IPopupProps {
  visible?: boolean,
  anchor?: AnchorType,
  trigger?: 'click' | 'hover',
  disable?: boolean,
  onOpen?: () => void,
  onClose?: () => void,
  onMouseEnter?: () => void,
  onMouseleave?: () => void,
  onChangeRequest?: (visible: boolean) => void
}

export interface IPopupState {
  visible: boolean
}

export default abstract class Popup<P> extends React.Component<IPopupProps & P, IPopupState> {

  static defaultProps = {
    anchor: 'bottom',
    trigger: 'click'
  }

  state = {
    visible: false
  }

  target: Element
  container: HTMLElement | null
  popper: HTMLElement
  $popper: Popper | null
  timer: any

  abstract getArrow: (popper: HTMLElement) => Element | null
  abstract getContent: () => React.ReactElement<any> | null

  componentDidMount () {
    this.target = ReactDOM.findDOMNode(this)

    if (!this.target) {
      return
    }

    const {visible} = this.state

    if (visible) {
      this.show()
    }
  }

  componentDidUpdate (prevProps: any, prevState: any) {
    const visible = this.props.visible
    if ('visible' in this.props && visible !== prevState.visible) {
      if (visible) {
        this.show()
      } else {
        this.hide()
      }
    } else {
      this.renderPopper()
    }
  }

  show = () => {
    const {disable, onChangeRequest} = this.props

    if (disable) {
      return
    }

    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }

    this.setState({visible: true}, () => {
      document.addEventListener('click', this.onClickOutside)
      this.createPopper()

      if (onChangeRequest) {
        onChangeRequest(true)
      }
    })
  }

  hide = () => {
    const {disable, onChangeRequest} = this.props

    if (this.timer) {
      clearTimeout(this.timer)
    }
    
    if (disable) {
      return
    }

    this.timer = setTimeout(() => {
      this.setState({visible: false}, () => {
        document.removeEventListener('click', this.onClickOutside)
        this.destroyPopper()
  
        if (onChangeRequest) {
          onChangeRequest(true)
        }
      })
    // tslint:disable-next-line:align
    }, 200)
  }

  onClickOutside = (e: MouseEvent) => {
    const el = e.target as any
    const {target, popper} = this

    if (!el || !target || !popper) {
      return
    }

    if (target.contains(el) || popper.contains(el)) {
      return
    }

    this.hide()
  }

  createPopper = () => {
    if (!this.container) {
      this.container = document.createElement('div')
      document.body.appendChild(this.container)
    }

    this.renderPopper()
  }

  renderPopper = () => {
    const {anchor} = this.props
    const content = this.getContent()

    if (!content || !this.container) {
      return
    }

    if (this.$popper) {
      this.$popper.destroy()
    }

    this.popper = ReactDOM.unstable_renderSubtreeIntoContainer(this, content, this.container) as HTMLElement

    if (this.popper) {
      const modifiers =  {arrow: {element: this.getArrow(this.popper) || ''}}
      
      this.$popper = new Popper(this.target, this.popper, {
        placement: anchor, modifiers
      })
    }
  }

  destroyPopper = () => {
    if (this.$popper) {
      this.$popper.destroy()
      this.$popper = null
    }

    if (this.container) {
      ReactDOM.unmountComponentAtNode(this.container)
      document.body.removeChild(this.container)
      this.container = null
    }
  }
}