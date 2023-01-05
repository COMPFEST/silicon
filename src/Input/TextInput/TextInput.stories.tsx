import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { TextInputProps } from './interface'
import TextInput from '.'

export default {
  id: 'input',
  title: 'Input',
  component: TextInput,
} as Meta

const Template: Story<TextInputProps> = (args) => (
  <TextInput {...args} />
)

export const _TextInput = Template.bind({})
_TextInput.args = {
  label: 'Label',
  helper: 'Helper text',
  error: 'Error message',
}
