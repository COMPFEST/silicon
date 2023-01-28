import { ReactNode } from 'react'

export interface ModalExtensionProps {
  isDisplayed: true | false
}

export interface ModalProps
  extends Partial<ModalExtensionProps>,
    Partial<ModalSizeProps> {
  title: string
  children: ReactNode
  imageUrl?: string
  acceptButton: ReactNode
  cancelButton?: ReactNode
  id: string
  alt: string
  handleState: () => void
}

export interface ModalWrapperProps extends Partial<ModalSizeProps> {
  Display: boolean
  title: string
  content: ReactNode
  alt: string
  imageUrl?: string
  acceptButton: boolean
  cancelButton: boolean
}

export interface ModalSizeProps {
  variant: 'sm' | 'md' | 'lg'
}

