import React, { createContext, useContext, useEffect } from 'react'
import { ModalContextProps } from './interface'
import { ModalDiv } from './Modal.style'

const Modal: React.FC<
  React.ComponentPropsWithoutRef<'div'> & ModalContextProps
> = ({ children, isDisplayed, variant, onClose }) => {
  useEffect(() => {
    if (isDisplayed) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [isDisplayed])

  return (
    <ModalProvider
      isDisplayed={isDisplayed}
      onClose={onClose}
      variant={variant}
    >
      <ModalDiv isDisplayed={isDisplayed}>{children}</ModalDiv>
    </ModalProvider>
  )
}

export default Modal

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps)

export const useModalContext = () => useContext(ModalContext)

const ModalProvider = ({
  children,
  isDisplayed,
  variant,
  onClose,
}: ModalContextProps) => {
  return (
    <ModalContext.Provider value={{ isDisplayed, variant, onClose, children }}>
      {children}
    </ModalContext.Provider>
  )
}
