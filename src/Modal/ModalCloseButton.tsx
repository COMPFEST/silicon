import React from 'react'
import { ModalContextProps } from './interface'
import { useModalContext } from './Modal'
import { CloseButtonWrapper, ModalCloseButtonDiv } from './Modal.style'

const ModalCloseButton: React.FC = () => {
  const { onClose }: ModalContextProps = useModalContext()

  return (
    <ModalCloseButtonDiv onClick={onClose}>
      <CloseButtonWrapper>
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.99422 0.906372C1.73832 0.906372 1.47072 0.992378 1.27542 1.18738C0.884919 1.57838 0.884919 2.23437 1.27542 2.62537L7.55672 8.90637L1.27542 15.1874C0.884919 15.5784 0.884919 16.2344 1.27542 16.6254C1.66602 17.0154 2.32242 17.0154 2.71302 16.6254L8.99422 10.3444L15.2754 16.6254C15.666 17.0154 16.3224 17.0154 16.713 16.6254C17.1035 16.2344 17.1035 15.5784 16.713 15.1874L10.4317 8.90637L16.713 2.62537C17.1035 2.23437 17.1035 1.57838 16.713 1.18738C16.5177 0.992378 16.25 0.906372 15.9942 0.906372C15.7383 0.906372 15.4708 0.992378 15.2754 1.18738L8.99422 7.46837L2.71302 1.18738C2.51772 0.992378 2.25012 0.906372 1.99422 0.906372Z"
            fill="white"
          />
        </svg>
      </CloseButtonWrapper>
    </ModalCloseButtonDiv>
  )
}

export default ModalCloseButton
