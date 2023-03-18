import React from 'react'
import { ModalContextProps } from './interface'
import { useModalContext } from './Modal'
import { ModalImageDiv } from './Modal.style'

const ModalImage: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
  children,
  ...props
}) => {
  const { variant }: ModalContextProps = useModalContext()
  return (
    <ModalImageDiv {...props} variant={variant}>
      {children}
    </ModalImageDiv>
  )
}

export default ModalImage
