import { ReactNode } from 'react'

export interface StyledTextInputProps {
  isError?: boolean
}

export interface TextInputProps {
  error?: string
  type?:
    | 'text'
    | 'url'
    | 'email'
    | 'password'
    | 'number'
    | 'hidden'
    | 'tel'
    | 'date'
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}
