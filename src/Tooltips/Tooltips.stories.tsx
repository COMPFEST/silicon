import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import TooltipsWrapper from './TooltipsWrapper'
import { expect } from '@storybook/jest'
import { within, userEvent } from '@storybook/testing-library'

export default {
  id: 'tooltips',
  title: 'Tooltips',
  component: TooltipsWrapper,
} as ComponentMeta<typeof TooltipsWrapper>

const Template: ComponentStory<typeof TooltipsWrapper> = (args) => (
  <TooltipsWrapper {...args} />
)

export const Show = Template.bind({})

Show.args = {
  text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
}

Show.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await expect(canvas.getAllByTestId('tooltip')[0]).toHaveStyle(
    'visibility: hidden'
  )
  await userEvent.hover(canvas.getAllByTestId('tooltip-container')[0])
  await expect(canvas.getAllByTestId('tooltip')[0]).toHaveStyle(
    'visibility: visible'
  )
  await userEvent.unhover(canvas.getAllByTestId('tooltip-container')[0])
  await expect(canvas.getAllByTestId('tooltip')[0]).toHaveStyle(
    'visibility: hidden'
  )

  await expect(canvas.getAllByTestId('tooltip')[1]).toHaveStyle(
    'visibility: hidden'
  )
  await userEvent.hover(canvas.getAllByTestId('tooltip-container')[1])
  await expect(canvas.getAllByTestId('tooltip')[1]).toHaveStyle(
    'visibility: visible'
  )
  await userEvent.unhover(canvas.getAllByTestId('tooltip-container')[1])
  await expect(canvas.getAllByTestId('tooltip')[1]).toHaveStyle(
    'visibility: hidden'
  )
}
