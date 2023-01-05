import { ReactNode } from 'react'

export interface isDisplayedProps {
  isDisplayed: true | false
}

export interface ModalProps extends Partial<isDisplayedProps> {
  title: string
  content: string
  imageUrl?: string
  acceptButton: ReactNode
  cancelButton?: ReactNode
}
