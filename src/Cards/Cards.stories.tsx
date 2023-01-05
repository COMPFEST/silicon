import React from 'react'
import { Meta, Story } from '@storybook/react'
import { CardsProps } from './interface'
import Cards from '.'

export default {
  id: 'cards',
  title: 'Cards',
  component: Cards,
} as Meta

const Template: Story<CardsProps> = (args) => <Cards {...args} />

export const Vertical = Template.bind({})
Vertical.args = {
  imageUrl: 'https://www.w3schools.com/images/w3schools_green.jpg',
  title: 'A title',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ac mi nunc volutpat gravida malesuada eu massa vestibulum.',
  onClick: () => alert('boom'),
}

export const VerticalWithoutContent = Template.bind({})
VerticalWithoutContent.args = {
  ...Vertical.args,
  content: '',
}

export const VerticalWithoutImage = Template.bind({})
VerticalWithoutImage.args = {
  ...Vertical.args,
  imageUrl: '',
}

export const VerticalImageOnly = Template.bind({})
VerticalImageOnly.args = {
  ...Vertical.args,
  content: '',
  title: '',
}
