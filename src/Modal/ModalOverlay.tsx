import React, { ComponentPropsWithoutRef } from 'react'
import { ModalContextProps } from './interface'
import { useModalContext } from './Modal'
import { ModalOverlayDiv } from './Modal.style'

const ModalOverlay: React.FC<ComponentPropsWithoutRef<'div'>> = ({
  ...props
}) => {
  const { onClose }: ModalContextProps = useModalContext()

  return <ModalOverlayDiv onClick={onClose} {...props}></ModalOverlayDiv>
}

export default ModalOverlay
