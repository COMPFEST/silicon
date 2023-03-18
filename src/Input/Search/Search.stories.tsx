import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { SearchInputProps } from './interface'
import SearchInput from '.'

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

const Template: Story<SearchInputProps> = (args) => <SearchInput {...args} />

export const _SearchInput = Template.bind({})
_SearchInput.args = {}
