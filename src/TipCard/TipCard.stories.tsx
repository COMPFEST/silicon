import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import TipCard from '.'

export default {
  id: 'tipCard',
  title: 'Tip Card',
  component: TipCard,
} as ComponentMeta<typeof TipCard>

const Template: ComponentStory<typeof TipCard> = (args) => <TipCard {...args} />

export const Default = Template.bind({})
Default.args = { text: 'Strictly Maximum Information of Two Lines' }