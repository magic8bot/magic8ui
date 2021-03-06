import './button.styl'

import React, { Component } from 'react'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  isDisabled?: boolean
  isOutline?: boolean
  color?: 'primary' | 'success' | 'danger'
  type?: 'button' | 'reset' | 'submit'
  onClick?: () => void
  tabindex?: number
  className?: string
}

export class Button extends Component<Props> {
  public static defaultProps: Props = {
    size: 'md',
    isDisabled: false,
    isOutline: false,
    color: 'primary',
    type: 'button',
    onClick: () => null,
  }

  public render() {
    const { size, isDisabled: disabled, isOutline, color, type, onClick, tabindex, className, children } = this.props

    const btnClassName = `${className} button button-${color} button-${size}` + (!isOutline ? '' : ' button-outline')

    const props: Record<string, any> = { className: btnClassName, type, disabled, onClick }
    if (typeof tabindex !== 'undefined') props.tabIndex = tabindex

    return <button {...props}>{children}</button>
  }
}
