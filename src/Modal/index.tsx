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
} from './Modal.style'

const Modal: React.FC<ModalProps> = ({
  id,
  title = '',
  content = '',
  imageUrl,
  acceptButton = null,
  cancelButton,
  isDisplayed = false,
  handleState,
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
      <ModalContent>
        <ImgContainer src={imageUrl}></ImgContainer>

        <HeadingContainer>
          <HeadingText>{title}</HeadingText>
        </HeadingContainer>

        <TextContainter>
          <ContentText>{content}</ContentText>
        </TextContainter>

        <ButtonContainer>
          {acceptButton}
          {cancelButton}
        </ButtonContainer>
      </ModalContent>
    </ModalContainter>
  )
}

export default Modal
