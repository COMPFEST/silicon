import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ModalWrapper from './modalWrapper'
import { expect } from '@storybook/jest'
import { within, userEvent } from '@storybook/testing-library'


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
  imageUrl: 'https://www.w3schools.com/tags/img_girl.jpg',
  alt: 'tester',
  variant: 'lg',
}
export const MDSize = Template.bind({})

MDSize.args = {
  title: 'Heading',
  imageUrl: 'https://www.w3schools.com/tags/img_girl.jpg',
  alt: 'tester',
  variant: 'md',
}

export const SMSize = Template.bind({})

SMSize.args = {
  title: 'Heading',
  imageUrl: 'https://www.w3schools.com/tags/img_girl.jpg',
  alt: 'tester',
  variant: 'sm',
}

LGSize.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await expect(canvas.getByTestId('modal')).toHaveStyle('display: none')
  await userEvent.click(canvas.getByRole('button'))
  await expect(canvas.getByTestId('modal')).toHaveStyle('display: block')
}

MDSize.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await expect(canvas.getByTestId('modal')).toHaveStyle('display: none')
  await userEvent.click(canvas.getByRole('button'))
  await expect(canvas.getByTestId('modal')).toHaveStyle('display: block')
}

SMSize.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await expect(canvas.getByTestId('modal')).toHaveStyle('display: none')
  await userEvent.click(canvas.getByRole('button'))
  await expect(canvas.getByTestId('modal')).toHaveStyle('display: block')
}


