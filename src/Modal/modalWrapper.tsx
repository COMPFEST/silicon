import { ModalWrapperProps } from './interface'
import React from 'react'
import Modal from '.'
import { useState } from 'react'
import Button from '../Button'

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  title = '',
  content = '',
  imageUrl,
  acceptButton = null,
  cancelButton,
  Display = false,
}) => {

  const [displayState, setDisplayState] = useState(Display)
  const handleButton = () => setDisplayState(!displayState)
  

  return (
    <div>
      <Button variant='primary' onClick={handleButton}>Click</Button>

      <Modal 
      title={title}
      isDisplayed={displayState}
      content={content}
      imageUrl={imageUrl}
      acceptButton={acceptButton}
      cancelButton={cancelButton}
      handleState={handleButton}></Modal>
    </div>
  )
}

export default ModalWrapper
