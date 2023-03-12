import React from 'react'
import { Meta, Story } from '@storybook/react'
import { DisclosureProps } from './interface'
import Disclosure from '.'

export default {
  id: 'disclosure',
  title: 'Disclosure',
  component: Disclosure,
} as Meta

const Template: Story<DisclosureProps> = (args) => <Disclosure {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'What is a disclosure?',
  children:
    'A simple, accessible foundation for building custom UIs that show and hide content.',
}
