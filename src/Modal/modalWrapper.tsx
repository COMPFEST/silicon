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
  acceptButton,
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
        alt={alt}
        title={title}
        isDisplayed={displayState}
        imageUrl={imageUrl}
        acceptButton={acceptButton ? <Button>Accept</Button> : null}
        cancelButton={
          cancelButton ? <Button variant="secondary">Cancel</Button> : null
        }
        handleState={handleButton}
      >
        {content}
      </Modal>
    </div>
  )
}

export default ModalWrapper
