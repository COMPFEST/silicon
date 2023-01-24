import { ModalWrapperProps } from './interface'
import React from 'react'
import Modal from '.'
import { useState } from 'react'
import Button from '../Button'

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  title = '',
  content,
  imageUrl,
  alt,
  acceptButton = null,
  cancelButton,
  Display = false,
  variant,
}) => {
  const [displayState, setDisplayState] = useState(Display)
  const handleButton = () => setDisplayState(!displayState)

  return (
    <div>
      <Button variant="primary" onClick={handleButton}>
        Click
      </Button>

      <Modal
        variant={variant}
        id="testModal"
        alt = {alt}
        title={title}
        isDisplayed={displayState}
        imageUrl={imageUrl}
        acceptButton={acceptButton}
        cancelButton={cancelButton}
        handleState={handleButton}
      >
        {content}
      </Modal>
    </div>
  )
}

export default ModalWrapper
