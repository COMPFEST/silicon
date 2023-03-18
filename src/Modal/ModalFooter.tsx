import React from 'react'
import { ModalContextProps } from './interface'
import { useModalContext } from './Modal'
import { ModalFooterDiv } from './Modal.style'

const ModalFooter: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({
  children,
  ...props
}) => {
  const { variant }: ModalContextProps = useModalContext()

  return (
    <ModalFooterDiv {...props} variant={variant}>
      {children}
    </ModalFooterDiv>
  )
}

export default ModalFooter
