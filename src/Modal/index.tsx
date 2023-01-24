import { ModalProps } from './interface'
import React, { useRef } from 'react'
import {
  ModalContainter,
  ModalContent,
  ButtonContent,
  TextContainter,
  HeadingText,
  ContentText,
  ImgContainer,
  HeadingContainer,
  ModalContentContainter,
  FillContainter,
  ButtonContainer,
} from './Modal.style'

const Modal: React.FC<ModalProps> = ({
  id,
  title = '',
  children,
  imageUrl,
  acceptButton = null,
  cancelButton,
  isDisplayed = false,
  handleState,
  variant = 'sm',
  alt,
  ...props
}) => {
  const modContain = useRef(null)
  return (
    <ModalContainter
      ref={modContain}
      id="container"
      onClick={function () {
        window.onclick = function (event) {
          const modal = document.getElementById('container')
          if (event.target == modal) {
            handleState()
          }
        }
      }}
      isDisplayed={isDisplayed}
    >
      <ModalContent variant={variant}>
        <ModalContentContainter variant={variant}>
          {imageUrl ? (
            <ImgContainer alt={alt} variant={variant} src={imageUrl}></ImgContainer>
          ) : null}

          <FillContainter>
            <HeadingContainer variant={variant}>
              <HeadingText variant={variant}>{title}</HeadingText>
            </HeadingContainer>

            <TextContainter>
              <ContentText>{children}</ContentText>
            </TextContainter>
          </FillContainter>
        </ModalContentContainter>
        <ButtonContainer variant={variant}>
          <ButtonContent variant={variant}>
            {acceptButton}
          </ButtonContent>
          <ButtonContent variant={variant}>
            {cancelButton}
          </ButtonContent>
        </ButtonContainer>
      </ModalContent>
    </ModalContainter>
  )
}

export default Modal
