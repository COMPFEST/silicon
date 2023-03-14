import React, { useState } from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { SelectProps } from './interface'
import Option from '../Option'
import Select from './'

export default {
  id: 'input',
  title: 'Input',
  argTypes: {
    value: {
      control: 'string',
    },
  },
} as Meta

const Template: Story<SelectProps> = (args) => {
  const [value, setValue] = useState('Silahkan pilih!')

  return (
    <Select {...args} onChange={setValue} value={value}>
      <Option value={1}>Child 1</Option>
      <Option value={2}>Child 2</Option>
      <Option value={3}>Child 3</Option>
    </Select>
  )
}

export const _Select = Template.bind({})
