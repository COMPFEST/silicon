import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Chip from '.'
import { RiHome4Line } from 'react-icons/ri'

export default {
  id: 'chip',
  title: 'Chip',
  component: Chip,
  argTypes: {
    isSelected: {
      control: 'boolean',
      description: 'Controls whether the chip is selected or not.',
      defaultValue: false,
    },
    leftIcon: {
      description:
        'The icon that will be rendered on the left of the text inside the chip. It is recommended to use icons from React Icons to simplify the layouting.',
      defaultValue: <RiHome4Line size={20} />,
      table: {
        disable: true,
      },
    },
    showLeftIcon: {
      control: 'boolean',
      description:
        'Controls whether the chip should contain a left icon or not.',
      defaultValue: false,
    },
    onClick: {
      description: 'The function to be run when the chip is clicked.',
      action: 'Chip clicked!',
    },
    children: {
      description: 'The text inside the chip.',
    },
  },
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />

export const Unselected = Template.bind({})
Unselected.args = {
  children: 'Chip',
}

export const Selected = Template.bind({})
Selected.args = {
  ...Unselected.args,
  isSelected: true,
}
