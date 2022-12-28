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

export const CompleteProps = Template.bind({})
CompleteProps.args = {
  title: 'Oprec Staff',
  targetDate: new Date('26 December 2022 21:58'),
  displayDate: true,
}

export const WithoutTitle = Template.bind({})
WithoutTitle.args = {
  targetDate: new Date('26 December 2022 21:58'),
  displayDate: true,
}

export const WithoutDisplayDate = Template.bind({})
WithoutDisplayDate.args = {
  targetDate: new Date('26 December 2022 21:58'),
}

export const CountdownMoreThan1Day = Template.bind({})
CountdownMoreThan1Day.args = {
  title: 'Oprec Staff',
  targetDate: new Date('7 April 2023 00:00'),
  displayDate: true,
}

export const CountdownComplete = Template.bind({})
CountdownComplete.args = {
  title: 'Oprec Staff',
  targetDate: new Date('25 December 2022 00:00'),
  displayDate: true,
}
