import { ComponentStory } from '@storybook/react'
import React, { useState } from 'react'
import Button from '../Button'
import Modal from './Modal'
import ModalBody from './ModalBody'
import ModalCloseButton from './ModalCloseButton'
import ModalContent from './ModalContent'
import ModalFooter from './ModalFooter'
import ModalHeader from './ModalHeader'
import ModalImage from './ModalImage'
import ModalOverlay from './ModalOverlay'

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    variant: {
      control: 'radio',
      options: ['lg', 'md', 'sm'],
      defaultValue: 'None',
    },
  },
}

const Template: ComponentStory<typeof Modal> = (args) => {
  const [display, setDisplay] = useState(false)

  function handleClick() {
    setDisplay((prev) => !prev)
  }

  return (
    <>
      <Button onClick={handleClick}>Click Me</Button>
      <Modal isDisplayed={display} onClose={handleClick} variant={args.variant}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalImage>
            <img src="https://cdn-icons-png.flaticon.com/128/4139/4139532.png" />
            {/* <img src="https://endlessicons.com/wp-content/uploads/2014/11/wifi-icon-2-214x214.png" /> */}
          </ModalImage>
          <ModalHeader>Halo</ModalHeader>
          <ModalBody>Body</ModalBody>
          <ModalFooter>
            <Button onClick={handleClick}>Loh</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export const ModalTest = Template.bind({})

ModalTest.args = {
  variant: 'md',
}
