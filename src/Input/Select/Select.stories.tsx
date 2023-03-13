import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { SelectInputProps } from './interface'
import SelectInput from './'

export default {
  id: 'input',
  title: 'Input',
  component: SelectInput,
  argTypes: {},
} as Meta

const Template: Story<SelectInputProps> = (args) => <SelectInput {...args} />

export const _SelectInput = Template.bind({})
_SelectInput.args = {
  label: 'Label',
  options: {
    'Child 1': 1,
    'Child 2': 2,
    'Child 3': 3,
    'Child 4': 4,
    'Child 5': 5,
    'Child 6': 6,
    'Child 7': 7,
    'Child 8': 8,
    'Child 9': 9,
    'Child 10': 10,
    'Child 11': 11,
    'Child 12': 12,
  },
}
