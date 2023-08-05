import { ReactNode } from 'react'

export interface ModalProps {
  isDisplayed: boolean
  variant?: 'sm' | 'md' | 'lg'
}

export interface ModalContentProps {
  variant?: 'sm' | 'md' | 'lg'
}

export interface ModalContextProps extends ModalProps {
  children: ReactNode
  onClose?: () => void
}

export interface ModalCloseButtonProps {
  color?: string
}
