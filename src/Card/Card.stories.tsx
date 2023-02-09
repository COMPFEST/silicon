import React from 'react'
import { Meta, Story } from '@storybook/react'
import { CardProps } from './interface'
import Card from '.'

export default {
  id: 'card',
  title: 'Card',
  component: Card,
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      defaultValue: 'sm',
    },
    imageUrl: {
      control: 'text',
      defaultValue: 'https://i.imgur.com/2XpTBZa.png',
    },
    title: {
      control: 'text',
    },
    body: {
      control: 'text',
    },
    sm: {
      if: {
        arg: 'size',
        eq: 'sm',
      },
      table: {
        disable: true,
      },
    },
    md: {
      if: {
        arg: 'size',
        eq: 'md',
      },
      table: {
        disable: true,
      },
    },
    lg: {
      if: {
        arg: 'size',
        eq: 'lg',
      },
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    imgClassName: {
      table: {
        disable: true,
      },
    },
    contentClassName: {
      table: {
        disable: true,
      },
    },
    bodyClassName: {
      table: {
        disable: true,
      },
    },
    titleClassName: {
      table: {
        disable: true,
      },
    },
    idContent: {
      table: {
        disable: true,
      },
    },
  },
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Normal = Template.bind({})
Normal.args = {
  imageUrl: 'https://i.imgur.com/2XpTBZa.png',
  title: 'A title',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ac mi nunc volutpat gravida malesuada eu massa vestibulum.',
}

export const WithoutContent = Template.bind({})
WithoutContent.args = {
  ...Normal.args,
  body: '',
  size: 'sm',
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