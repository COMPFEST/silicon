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

export const Displayed = Template.bind({})

Displayed.args = {
  title: 'test',
  content: 'test',
  imageUrl: 'asdsa',
  acceptButton: <Button>Accept</Button>,
  cancelButton: <Button variant="secondary">Cancel</Button>,
}
