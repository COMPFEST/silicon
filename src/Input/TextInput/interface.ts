import { ReactNode } from 'react'

export interface StyledTextInputProps {
  isError?: boolean
}

export interface TextInputProps {
  error?: string
  type?: 'text' | 'url' | 'email' | 'password' | 'number' | 'hidden'
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  inputClassName?: string
}
