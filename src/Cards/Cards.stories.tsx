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
  imageUrl:
    'https://images.unsplash.com/photo-1602784380190-81706bc30b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
  title: 'A title',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ac mi nunc volutpat gravida malesuada eu massa vestibulum.',
  onClick: () => alert('boom'),
}

export const WithoutContent = Template.bind({})
WithoutContent.args = {
  ...Normal.args,
  content: '',
}

export const WithoutImage = Template.bind({})
WithoutImage.args = {
  ...Normal.args,
  imageUrl: '',
}

export const ImageOnly = Template.bind({})
ImageOnly.args = {
  ...Normal.args,
  content: '',
  title: '',
}
