import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { TextInputProps } from './interface'
import TextInput from '.'
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  id: 'input',
  title: 'Input',
  component: TextInput,
} as Meta

const Template: Story<TextInputProps> = (args) => <TextInput data-testid="text-id" {...args} />

export const _TextInput = Template.bind({})
_TextInput.args = {
  label: 'Label',
  helper: 'Helper text',
  error: 'Error message',
  type: 'text',
}

_TextInput.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('text-id'), 'Lorem ipsum dolor sit amet')
  expect(canvas.getByTestId('text-id')).toHaveDisplayValue('Lorem ipsum dolor sit amet')
}