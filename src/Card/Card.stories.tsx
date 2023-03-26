import React from 'react'
import { Meta, Story } from '@storybook/react'
import { CardProps } from './interface'
import Card from './index'
import CardContent from './CardContent'
import CardDescription from './CardDescription'
import CardTitle from './CardTitile'
import CardBody from './CardBody'

export default {
  id: 'card',
  title: 'Card',
  component: Card,
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'full'],
      defaultValue: 'md',
    },
    title: {
      control: 'text',
    },
    body: {
      control: 'text',
    },
    backgroundColor: {
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
    full: {
      if: {
        arg: 'size',
        eq: 'full',
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
    content: {
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

const Template: Story<CardProps> = (args) => {
  return (
    <>
      <Card
        size={args.size}
        direction={args.direction}
        backgroundColor={args.backgroundColor}
      >
        {args.content != undefined && (
          <CardContent direction={args.direction}>{args.content}</CardContent>
        )}

        {(args.title != undefined || args.body != undefined) && (
          <CardDescription descriptionClassName={args.descriptionClassName}>
            {args.title != undefined && <CardTitle>{args.title}</CardTitle>}
            {args.body != undefined && <CardBody>{args.body}</CardBody>}
          </CardDescription>
        )}
      </Card>
    </>
  )
}

export const Normal = Template.bind({})
Normal.args = {
  content: (
    <img
      src={'https://land-stg.virgoku.dev/static/media/logo.e6ea0f3a.png'}
      alt="test"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        maxWidth: '240px',
        maxHeight: '120px',
      }}
    />
  ),
  title: 'A title',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ac mi nunc volutpat gravida malesuada eu massa vestibulum.',
}

export const WithoutContent = Template.bind({})
WithoutContent.args = {
  ...Normal.args,
  body: undefined,
  size: 'sm',
}

export const WithoutImage = Template.bind({})
WithoutImage.args = {
  ...Normal.args,
  content: undefined,
}

export const ImageOnly = Template.bind({})
ImageOnly.args = {
  ...Normal.args,
  body: undefined,
  title: undefined,
  content: (
    <img
      src={'https://land-stg.virgoku.dev/static/media/logo.e6ea0f3a.png'}
      alt="test"
      style={{
        width: '240px',
        height: '120px',
      }}
    />
  ),
}
