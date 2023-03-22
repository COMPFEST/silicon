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
            {/* <img src="https://cdn-icons-png.flaticon.com/128/4139/4139532.png" /> */}
            <img
              style={{ maxWidth: '100%', maxHeight: '100%' }}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F9e463c1f-7343-425a-9cfe-e637f1d0aa5e%2Fdcc8mf8-0c616d9d-defb-4984-93b7-a561636950f8.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzllNDYzYzFmLTczNDMtNDI1YS05Y2ZlLWU2MzdmMWQwYWE1ZVwvZGNjOG1mOC0wYzYxNmQ5ZC1kZWZiLTQ5ODQtOTNiNy1hNTYxNjM2OTUwZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.asuPNQSk7JgftFrzfz9-ghZoSMQJhDEeuXsxOayo6l8&f=1&nofb=1&ipt=98adb552f590ac39aabed26efd25b54e23576c777246e398577ed887cfad706e&ipo=images"
            />
          </ModalImage>
          <ModalHeader>Halo</ModalHeader>
          <ModalBody>Body</ModalBody>
          <ModalFooter>
            <Button onClick={handleClick}>Close</Button>
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
