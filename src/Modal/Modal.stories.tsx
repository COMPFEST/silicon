import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ModalWrapper from './modalWrapper'

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
    }
  },
} as ComponentMeta<typeof ModalWrapper>

const Template: ComponentStory<typeof ModalWrapper> = (args) => (
  <ModalWrapper {...args} />
)

export const LGSize = Template.bind({})

LGSize.args = {
  title: 'Heading',
  imageUrl: 'https://www.w3schools.com/tags/img_girl.jpg',
  alt: 'tester',
  variant: 'lg',
}
export const MDSize = Template.bind({})

MDSize.args = {
  title: 'Heading',
  imageUrl: 'https://www.w3schools.com/tags/img_girl.jpg',
  alt: 'tester',
  variant:'md',
}

export const SMSize = Template.bind({})

SMSize.args = {
  title: 'Heading',
  imageUrl: 'https://www.w3schools.com/tags/img_girl.jpg',
  alt: 'tester',
  variant:'sm',
}
