import React from 'react'
import { ModalContextProps } from './interface'
import { useModalContext } from './Modal'
import { ModalOverlayDiv } from './Modal.style'

const ModalOverlay: React.FC = () => {
  const { onClose }: ModalContextProps = useModalContext()

  return <ModalOverlayDiv onClick={onClose}></ModalOverlayDiv>
}

export default ModalOverlay
