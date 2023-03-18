import React from 'react'
import { ModalContextProps } from './interface'
import { useModalContext } from './Modal'
import { ModalHeaderDiv } from './Modal.style'

const ModalHeader: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
  children,
  ...props
}) => {
  const { variant }: ModalContextProps = useModalContext()
  return (
    <ModalHeaderDiv {...props} variant={variant}>
      {children}
    </ModalHeaderDiv>
  )
}

export default ModalHeader
