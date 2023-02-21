import React from 'react'
import { Meta, Story } from '@storybook/react'
import { DisclosureProps } from './interface'
import Disclosure from '.'
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

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

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await new Promise((r) => setTimeout(r, 1000))
  await expect(canvas.getByTestId('children')).toHaveStyle('display : none')
  await userEvent.click(canvas.getByTestId('title'))
  await expect(canvas.getByTestId('children')).toHaveStyle('display : block')
  await new Promise((r) => setTimeout(r, 1000))
  await userEvent.click(canvas.getByTestId('title'))
  await expect(canvas.getByTestId('children')).toHaveStyle('display : none')
}
