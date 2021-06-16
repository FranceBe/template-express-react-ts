import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Button, ButtonProps } from './Button'

export default {
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  component: Button,
  title: 'Example/Button',
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
  primary: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  label: 'Button',
  size: 'large',
}

export const Small = Template.bind({})
Small.args = {
  label: 'Button',
  size: 'small',
}
