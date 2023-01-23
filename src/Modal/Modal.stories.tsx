import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Button from '../Button'
import ModalWrapper from './modalWrapper'

export default {
  id: 'modal',
  title: 'Modal',
  component: ModalWrapper,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['lg', 'md', 'sm'],
      defaultValue: 'lg',
    },
    acceptButton: {
      control: false,
    },
    cancelButton: {
      control: false,
    },
  },
} as ComponentMeta<typeof ModalWrapper>

const Template: ComponentStory<typeof ModalWrapper> = (args) => (
  <ModalWrapper {...args} />
)

export const NoButton = Template.bind({})

NoButton.args = {
  title: 'Heading',
  content: (
    <p>
      Lorem ipsum dolor sit amet, consectetasdasd sdaurdasas dasasadipiscing
      elit. Ut dui orci ac egestas.
    </p>
  ),
  imageUrl: 'https://www.w3schools.com/tags/img_girl.jpg',
}
export const AccButton = Template.bind({})

AccButton.args = {
  title: 'Heading',
  content: (
    <p>
      Lorem ipsum dolor sit amet, consectetasdasd sdaurdasas dasasadipiscing
      elit. Ut dui orci ac egestas.
    </p>
  ),
  imageUrl: 'https://www.w3schools.com/tags/img_girl.jpg',
  acceptButton: <Button>Accept</Button>,
}

export const CompleteButton = Template.bind({})

CompleteButton.args = {
  title: 'Heading',
  imageUrl: 'https://www.w3schools.com/tags/img_girl.jpg',
  content: <p>Lorem ipsum dolor sit amet, consectetasdasd s</p>,
  acceptButton: <Button>Accept</Button>,
  cancelButton: <Button variant="secondary">Cancel</Button>,
}
