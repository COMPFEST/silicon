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
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tempor enim at nulla dignissim, rhoncus porta sapien efficitur.
            Phasellus commodo tempor feugiat. Proin mattis purus vitae pharetra
            venenatis. Morbi a dolor et erat suscipit dignissim. Fusce id lacus
            nec nunc accumsan ultricies. Suspendisse quis lorem condimentum
            magna posuere dictum. Duis laoreet ultricies nisl eget condimentum.
            Maecenas lorem eros, sodales eu sollicitudin eu, cursus a turpis.
            Duis laoreet tincidunt ex, quis lacinia mauris fringilla at. Vivamus
            sagittis quam est, nec finibus elit sollicitudin sit amet. Aliquam
            orci massa, aliquet vitae efficitur id, tempus vel enim.
            Pellentesque sed urna enim. Duis in ipsum et lorem viverra ultricies
            a vitae ligula. Proin pharetra eu enim aliquam gravida. In fringilla
            eros ac hendrerit gravida. Phasellus pretium velit at imperdiet
            tempus. Etiam neque mi, laoreet suscipit turpis nec, consequat
            tincidunt nunc. Praesent malesuada justo erat, eu luctus ipsum
            sollicitudin non. Duis ultricies metus vulputate, dictum odio sed,
            faucibus erat. Quisque blandit libero in augue dapibus pretium.
            Nullam urna risus, fringilla id libero quis, pellentesque varius
            est. Donec scelerisque orci sed sagittis ornare. Cras a interdum
            nibh. Sed urna ligula, blandit et interdum sit amet, luctus non
            lacus. Nullam augue risus, posuere ut interdum eget, ullamcorper non
            arcu. Praesent est magna, pharetra sodales imperdiet eu,
            pellentesque sit amet lorem. In hac habitasse platea dictumst. Nunc
            vel imperdiet orci. Vivamus id leo turpis. Donec lacinia hendrerit
            efficitur. Duis quis risus at sem fringilla viverra et non erat. Nam
            quis enim sed sapien efficitur aliquet. Praesent lacus arcu, tempor
            a nisl porttitor, pharetra scelerisque lorem. Cras dictum neque id
            placerat tristique. Etiam vehicula, tellus quis faucibus imperdiet,
            quam arcu ornare dui, vitae tincidunt sem neque sed turpis. Duis
            vitae massa quam. Aenean eu laoreet mauris, id feugiat mi. Sed
            vehicula dignissim velit et vehicula. Donec eget ullamcorper sapien.
            Proin nec scelerisque dui. Curabitur congue convallis facilisis.
            Cras quis maximus est. Sed condimentum arcu vitae eros aliquet
            semper. Maecenas porta mollis accumsan. Pellentesque convallis augue
            sit amet purus feugiat, et volutpat nulla pharetra. Fusce
            condimentum faucibus mi, eu congue velit consequat at. Donec
            convallis neque diam, in viverra nisi convallis et. In bibendum
            velit tortor, non lobortis erat luctus quis. Integer sed ultricies
            sapien. Nulla eget nulla non lorem volutpat feugiat. Aliquam
            volutpat luctus mollis. Sed elementum, nunc sit amet tristique
            dictum, nisi dolor dapibus augue, a gravida dolor lectus at tellus.
            Vestibulum condimentum lacus non lectus luctus porta. Nullam
            accumsan mauris sit amet pulvinar feugiat. Maecenas est felis,
            sodales sed justo non, auctor interdum magna. Morbi ullamcorper
            justo mauris, aliquet semper arcu dapibus efficitur.
          </ModalBody>
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
