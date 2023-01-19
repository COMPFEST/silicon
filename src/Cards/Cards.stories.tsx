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

export const Normal = Template.bind({})
Normal.args = {
  imageUrl: 'https://i.imgur.com/2XpTBZa.png',
  title: 'A title',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ac mi nunc volutpat gravida malesuada eu massa vestibulum.',
  width: 300,
  height: 270,
}

export const WithoutContent = Template.bind({})
WithoutContent.args = {
  ...Normal.args,
  body: '',
}

export const WithoutImage = Template.bind({})
WithoutImage.args = {
  ...Normal.args,
  imageUrl: '',
}

export const ImageOnly = Template.bind({})
ImageOnly.args = {
  ...Normal.args,
  body: '',
  title: '',
}
