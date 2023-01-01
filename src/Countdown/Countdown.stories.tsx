import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Countdown from '.'

export default {
  id: 'countdown',
  title: 'Countdown',
  component: Countdown,
  argTypes: {
    displayDate: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Countdown>

const Template: ComponentStory<typeof Countdown> = (args) => (
  <Countdown {...args} />
)

const today = new Date()
const tomorrow = new Date()
const farDate = new Date('1 May 2023 00:00')
tomorrow.setDate(today.getDate() + 1)

export const LessThanOneDay = Template.bind({})
LessThanOneDay.args = {
  title: 'Oprec Staff',
  targetDate: tomorrow,
  displayDate: true,
}

export const MoreThanOneDay = Template.bind({})
MoreThanOneDay.args = {
  title: 'Oprec Staff',
  targetDate: farDate,
  displayDate: true,
}

export const CountdownComplete = Template.bind({})
CountdownComplete.args = {
  title: 'Oprec Staff',
  targetDate: today,
  displayDate: true,
}
