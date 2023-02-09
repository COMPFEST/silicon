import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ModalWrapper from './modalWrapper'

export const imageSytle = {
  borderRadius: '5px',
  height: '100%',
}

export default {
  id: 'modal',
  title: 'Modal',
  component: ModalWrapper,
  argTypes: {
    acceptButton: {
      control: 'boolean',
    },
    cancelButton: {
      control: 'boolean',
    },
    content: {
      control: 'text',
    },
    variant: {
      control: 'radio',
      options: ['lg', 'md', 'sm'],
      defaultValue: 'None',
    },
  },
} as ComponentMeta<typeof ModalWrapper>

const Template: ComponentStory<typeof ModalWrapper> = (args) => (
  <ModalWrapper {...args} />
)

export const LGSize = Template.bind({})

LGSize.args = {
  title: 'Heading',
  image: (
    <img style={imageSytle} src="https://www.w3schools.com/tags/img_girl.jpg" />
  ),
  variant: 'lg',
}
export const MDSize = Template.bind({})

MDSize.args = {
  title: 'Heading',
  image: (
    <img style={imageSytle} src="https://www.w3schools.com/tags/img_girl.jpg" />
  ),
  variant: 'md',
}

export const SMSize = Template.bind({})

SMSize.args = {
  title: 'Heading',
  image: (
    <img style={imageSytle} src="https://www.w3schools.com/tags/img_girl.jpg" />
  ),
  variant: 'sm',
}
