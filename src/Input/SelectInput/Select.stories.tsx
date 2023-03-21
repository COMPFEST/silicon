import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import { SelectInputProps } from './interface'
import SelectInput from '.'

export default {
  id: 'input',
  title: 'Input',
  component: SelectInput,
  argTypes: {},
} as Meta

const Template: Story<SelectInputProps> = (args) => (
  <>
    <SelectInput {...args}>
      <option value="2">Child 2</option>
      <option value="3">Child 3</option>
      <option value="4">Child 4</option>
      <option value="5">Child 5</option>
      <option value="6">
        Nama yang sangat amat panjang sekali panjang sekali
      </option>
    </SelectInput>
  </>
)

export const _SelectInput = Template.bind({})
_SelectInput.args = {
  label: 'Label',
}
