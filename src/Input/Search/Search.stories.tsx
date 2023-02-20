import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { SearchInputProps } from './interface'
import SearchInput from '.'
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

export default {
  id: 'input',
  title: 'Input',
  component: SearchInput,
  argTypes: {
    align: {
      options: ['left', 'center'],
      control: { type: 'radio' },
      defaultValue: 'left',
    },
    icon: {
      options: ['none', 'left', 'right'],
      control: { type: 'radio' },
      defaultValue: 'none',
    },
  },
} as Meta

const Template: Story<SearchInputProps> = (args) => (
  <SearchInput data-testid="search-id" {...args} />
)

export const _SearchInput = Template.bind({})
_SearchInput.args = {}

_SearchInput.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  await userEvent.type(
    canvas.getByTestId('search-id'),
    'Lorem ipsum dolor sit amet'
  )
  expect(canvas.getByTestId('search-id')).toHaveDisplayValue(
    'Lorem ipsum dolor sit amet'
  )
}
