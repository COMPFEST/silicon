import { ReactNode } from 'react'

export interface ModalExtensionProps {
  isDisplayed: true | false
}

export interface ModalProps extends Partial<ModalExtensionProps>, Partial<ModalSizeProps> {
  title: string
  children: ReactNode
  imageUrl?: string
  acceptButton: ReactNode
  cancelButton?: ReactNode
  id: string
  handleState: () => void
}

export interface ModalWrapperProps extends Partial<ModalSizeProps> {
  Display: boolean
  title: string
  content: ReactNode
  imageUrl?: string
  acceptButton: ReactNode
  cancelButton?: ReactNode
}

export interface ModalSizeProps {
  variant: 'sm' | 'md' | 'lg'
}