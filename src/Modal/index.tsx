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
  titleClassName,
  acceptButton,
  cancelButton,
  isDisplayed = false,
  onClose,
  variant = 'lg',
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
      className="modal-overlay"
      onClick={function () {
        window.onclick = function (event) {
          const modal = document.getElementsByClassName('modal-overlay')[0]
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
            {!!image ? image : null}
          </ImgContainer>
          <FillContainer>
            <HeadingContainer variant={variant}>
              <HeadingText className={titleClassName} variant={variant}>
                {title}
              </HeadingText>
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
export default Modal
