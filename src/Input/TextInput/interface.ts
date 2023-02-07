import React from 'react'

export interface StyledTextInputProps
  extends React.ComponentPropsWithoutRef<'input'> {
  isError?: boolean
}

export interface TextInputProps
  extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
  helper?: string
  error?: string
  type?: 'text' | 'url' | 'email' | 'password' | 'number' | 'hidden'
}
