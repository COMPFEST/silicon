import React from 'react'
import { ModalContextProps } from './interface'
import { useModalContext } from './Modal'
import { ModalBodyDiv } from './Modal.style'

const ModalBody: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
  children,
  ...props
}) => {
  const { variant }: ModalContextProps = useModalContext()
  return (
    <ModalBodyDiv {...props} variant={variant}>
      {children}
    </ModalBodyDiv>
  )
}

export default ModalBody
