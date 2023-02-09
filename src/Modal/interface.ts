import { ReactNode } from 'react'

export interface ModalExtensionProps {
  isDisplayed: true | false
}

export interface ModalProps
  extends Partial<ModalExtensionProps>,
    Partial<ModalSizeProps> {
  title: string
  image?: ReactNode
  acceptButton: ReactNode
  cancelButton?: ReactNode
  onClose: () => void
}

export interface ModalWrapperProps extends Partial<ModalSizeProps> {
  Display: boolean
  title: string
  content: ReactNode
  image?: ReactNode
  acceptButton: boolean
  cancelButton: boolean
}

export interface ModalSizeProps {
  variant: 'sm' | 'md' | 'lg'
}
