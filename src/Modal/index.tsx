import { ModalProps } from './interface'
import React, { useEffect } from 'react'
import {
  ModalContainer,
  ModalContent,
  ButtonContent,
  TextContainer,
  HeadingText,
  ContentText,
  HeadingContainer,
  ModalContentContainer,
  FillContainer,
  ButtonContainer,
  ImgContainer,
} from './Modal.style'

const Modal: React.FC<React.ComponentPropsWithoutRef<'div'> & ModalProps> = ({
  id,
  title,
  image,
  acceptButton,
  cancelButton,
  isDisplayed = false,
  onClose,
  variant = 'sm',
  children,
  ...props
}) => {
  useEffect(() => {
    if (isDisplayed) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [isDisplayed])

  return (
    <ModalContainer
      id="modal-overlay"
      onClick={function () {
        window.onclick = function (event) {
          const modal = document.getElementById('modal-overlay')
          if (event.target == modal) {
            onClose()
          }
        }
      }}
      isDisplayed={isDisplayed}
    >
      <ModalContent id={id} variant={variant} {...props}>
        <ModalContentContainer variant={variant}>
          <ImgContainer variant={variant}>
            {!!image ? image : <CheckIcon />}
          </ImgContainer>
          <FillContainer>
            <HeadingContainer variant={variant}>
              <HeadingText variant={variant}>{title}</HeadingText>
            </HeadingContainer>

            <TextContainer>
              <ContentText>{children}</ContentText>
            </TextContainer>
          </FillContainer>
        </ModalContentContainer>
        <ButtonContainer variant={variant}>
          <ButtonContent variant={variant}>{acceptButton}</ButtonContent>
          <ButtonContent variant={variant}>{cancelButton}</ButtonContent>
        </ButtonContainer>
      </ModalContent>
    </ModalContainer>
  )
}

const CheckIcon = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="72" height="72" rx="36" fill="#68FCD6" />
    <path
      d="M50.036 23.9934C49.524 23.9934 48.99 24.1614 48.6 24.5454L31.186 41.7334C30.672 42.2394 30.156 42.1454 29.752 41.5494L23.76 32.7094C23.148 31.8074 21.868 31.5554 20.95 32.1574C20.0339 32.7594 19.778 34.0174 20.39 34.9194L26.38 43.7594C28.184 46.4174 31.698 46.7554 33.996 44.4954L51.472 27.3694C52.25 26.6014 52.25 25.3134 51.472 24.5454C51.082 24.1614 50.546 23.9934 50.036 23.9934Z"
      fill="black"
      fillOpacity="0.5"
    />
  </svg>
)

export default Modal
