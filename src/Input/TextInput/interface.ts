import React from 'react'

export interface StyledTextInputProps
  extends React.ComponentPropsWithoutRef<'input'> {
  isError?: boolean
}

export interface TextInputProps extends StyledTextInputProps {
  label?: string
  helper?: string
  error?: string
}
