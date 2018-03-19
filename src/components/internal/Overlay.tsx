import * as React from 'react'

export interface IOverlayProps {
  visible: boolean
  fixed?: boolean
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export default class Overlay extends React.Component<IOverlayProps> {

  static defaultProps = {
    style: {},
    fixed: false
  }

  getStyles = (visible: boolean, fixed: boolean) => {
    const style = {
      root: {
        position: fixed ? 'fixed' : 'absolute',
        top: '0',
        left: '-100%',
        zIndex: '1000',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .12)',
        opacity: '0',
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', // Remove mobile color flashing (deprecated)
        transition: `left 0ms cubic-bezier(0.23, 1, 0.32, 1) 400ms,
          opacity 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms`
      }
    }

    if (visible) {
      Object.assign(style.root, {
        left: '0',
        opacity: '1',
        transition: `left 0ms cubic-bezier(0.23, 1, 0.32, 1) 0ms,
          opacity 400ms cubic-bezier(0.23, 1, 0.32, 1) 0ms`
      })
    }

    return style
  }

  render () {
    const {
      visible,
      fixed = false,
      className,
      style,
      onClick
    } = this.props

    // style
    const styleString = Object.assign(this.getStyles(visible, fixed).root, style)

    return (
      <div
        className={className}
        style={styleString}
        onClick={onClick}
      />
    )
  }
}