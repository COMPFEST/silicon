import React from 'react'
import { ModalContextProps } from './interface'
import { useModalContext } from './Modal'
import { ModalContentDiv } from './Modal.style'

const ModalContent: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
  children,
  ...props
}) => {
  const { variant }: ModalContextProps = useModalContext()

  return (
    <ModalContentDiv {...props} variant={variant}>
      {children}
    </ModalContentDiv>
  )
}

export default ModalContent
