import React from 'react'
import styled from 'styled-components'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
  /**
   * What background color to use
   */
  backgroundColor?: string
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */

const ButtonStyle = styled((props) => <button {...props} />)`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${(props) => (props.mode === 'storybook-button--primary' ? 'white' : '#333')};
  background-color: ${(props) =>
    props.mode === 'storybook-button--primary' ? '#1ea7fd' : 'transparent'};
  box-shadow: ${(props) =>
    props.mode === 'storybook-button--primary'
      ? 'none'
      : 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'};
  font-size: ${(props) =>
    props.size === 'medium' ? '14px' : props.size === 'small' ? '12px' : '16px'};
  padding: ${(props) =>
    props.size === 'medium' ? '11px 20px' : props.size === 'small' ? '10px 16px' : '12px 24px'};
`
export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'
  return (
    <ButtonStyle
      mode={mode}
      size={size}
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </ButtonStyle>
  )
}
