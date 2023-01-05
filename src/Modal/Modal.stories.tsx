import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Modal from '.'
import Button from '../Button'

export default {
  id: 'modal',
  title: 'Modal',
  component: Modal,
  argTypes: {
    isDisplayed: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const NoButton = Template.bind({})

NoButton.args = {
  title: 'Heading',
  content:
    'Lorem ipsum dolor sit amet, consectetasdasd sdaurdasas dasasadipiscing elit. Ut dui orci ac egestas.',
  imageUrl: 'https://www.w3schools.com/tags/img_girl.jpg',
}

export const AccButton = Template.bind({})

AccButton.args = {
  title: 'Heading',
  content:
    'Lorem ipsum dolor sit amet, consectetasdasd sdaurdasas dasasadipiscing elit. Ut dui orci ac egestas.',
  imageUrl: 'https://www.w3schools.com/tags/img_girl.jpg',
  acceptButton: <Button>Accept</Button>,
}

export const CompleteButton = Template.bind({})

CompleteButton.args = {
  title: 'Heading',
  content:
    'Lorem ipsum dolor sit amet, consectetasdasd sdaurdasas dasasadipiscing elit. Ut dui orci ac egestas.',
  imageUrl: 'https://www.w3schools.com/tags/img_girl.jpg',
  acceptButton: <Button>Accept</Button>,
  cancelButton: <Button variant="secondary">Cancel</Button>,
}
