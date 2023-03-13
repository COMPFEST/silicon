import React from 'react'

export interface StyledSelectProps
  extends React.ComponentPropsWithoutRef<'input'> {
  isError?: boolean
}

export interface SelectInputProps
  extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
  options: Record<string | number, string | number>
}
