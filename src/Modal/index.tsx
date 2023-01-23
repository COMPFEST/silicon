import { ModalProps } from './interface'
import React, { useRef } from 'react'
import {
  ModalContainter,
  ModalContent,
  ButtonContainer,
  TextContainter,
  HeadingText,
  ContentText,
  ImgContainer,
  HeadingContainer,
  ModalContentContainter,
  FillContainter,
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
            <ImgContainer variant={variant} src={imageUrl}></ImgContainer>
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
          {acceptButton}
          {cancelButton}
        </ButtonContainer>
      </ModalContent>
    </ModalContainter>
  )
}

export default Modal
