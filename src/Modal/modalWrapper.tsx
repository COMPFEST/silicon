import { ModalProps } from './interface'
import React from 'react'
import { ModalContainter, ModalContent, ButtonContainer, TextContainter, HeadingText, ContentText, ImgContainer, HeadingContainer } from './Modal.style'


const Modal: React.FC<ModalProps> = ({
  title = '',
  content = '',
  imageUrl,
  acceptButton = null,
  cancelButton,
  isDisplayed = false,
  ...props
}) => {
  return (
    <ModalContainter isDisplayed={isDisplayed}>
      <ModalContent>

        <ImgContainer src={imageUrl}>
        </ImgContainer>

        <HeadingContainer>
          <HeadingText>
            {title}
          </HeadingText>
        </HeadingContainer>

        <TextContainter>
          <ContentText>
            {content}
          </ContentText>
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
