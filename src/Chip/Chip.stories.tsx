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
      defaultValue: <RiHome4Line size={20} />,
      table: {
        disable: true,
      },
    },
    showLeftIcon: {
      control: 'boolean',
      defaultValue: false,
    },
    onClick: {
      action: 'Chip clicked!',
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
